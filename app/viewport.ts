import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {HomePage} from './pages/home/HomePage';
import {AboutPage} from './pages/about/AboutPage';
import {UsersPage} from "./pages/users/UsersPage";

@Component({
    selector: 'viewport',
    template: `
    <div id="wrap">
        <div class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" [routerLink]="['Home']">{{title}}</a>
                </div>
                <ul class="nav navbar-nav">
                    <li>
                        <a [routerLink]="['Users']">Users</a>
                    </li>
                    <li>
                        <a [routerLink]="['About']">About</a>
                    </li>
                </ul>
            </div>
        </div>

        <router-outlet></router-outlet>
    </div>

    <div id="footer">
    <div class="container">
    <p class="text-muted credit">Za Sticky Footer</p>
    </div>
    </div>
    `,
    directives: [
        ROUTER_DIRECTIVES
    ]
})

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        useAsDefault: true
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersPage,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },

])

export class Viewport {
    title = 'Angular 2 Start App';
}