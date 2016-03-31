import '../style/app.scss'; //global styles

import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {CustomRouterOutlet} from './directives/custom-router-outlet';

import {UserService} from './services/user';

import {Home} from './components/home/home';
import {Friends} from './components/friends/friends';
import {About} from "./components/about/about";

import {Authentication} from "./components/authentication/authentication";

@Component({
    selector: 'app',
    providers: [...FORM_PROVIDERS, UserService],
    directives: [CustomRouterOutlet, RouterLink],
    pipes: [],
    styles: [require('./app.scss')],
    template: require('./app.html')
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home', useAsDefault: true},
    {path: '/friends', component: Friends, name: 'Friends'},
    {path: '/about', component: About, name: 'About'},
    {path: '/authentication', component: Authentication, as: 'Authentication'},

])
export class App {

    title: string = 'Social Quiz';

    constructor(public router: Router,
                public userService: UserService) {

    }

    logout(event) {
        event.preventDefault();
        var me = this;
        this.userService.logout(function () {
            me.router.navigateByUrl('/authentication');
        });

    }
}
