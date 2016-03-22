const sourceMaps = require('gulp-sourcemaps');
const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const watch = require('gulp-watch');

const appTS = 'app';

gulp.task('clean', function () {
    return del(appTS + '/**/*.js');
});

gulp.task('compile', ['clean'], function () {
    return gulp
        .src([
            appTS + "/**/*.ts",
            "typings/browser/**/*.ts",
            "typings/browser.d.ts"
         ])
        .pipe(sourceMaps.init())
        .pipe(typescript({
            "outDir": "dist",
            "target": "ES5",
            "module": "system",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "moduleResolution": "node",
            "removeComments": false,
            "noImplicitAny": true,
            "suppressImplicitAnyIndexErrors": true
        }))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(appTS));
});

gulp.task('watch', ['compile'], function() {
    gulp.watch(appTS + '/**/*.ts', ['compile']);
});

gulp.task('build', ['compile']);