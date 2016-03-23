const sourceMaps = require('gulp-sourcemaps');
const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const watch = require('gulp-watch');

const app = 'app';

gulp.task('clean', function () {
    return del([app + '/**/*.js',app + '/**/*.map']);
});

gulp.task('compile', ['clean'], function () {
    return gulp
        .src([
            app + "/**/*.ts",
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
        .pipe(gulp.dest(app));
});

gulp.task('watch', ['compile'], function() {
    gulp.watch(app + '/**/*.ts', ['compile']);
});

gulp.task('build', ['compile']);