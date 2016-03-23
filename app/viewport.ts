import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import {HomePage}   from './pages/home/HomePage';
import {AboutPage}  from './pages/about/AboutPage';
import {UsersPage}  from './pages/users/UsersPage';
import {Menubar}   from 'primeng/primeng';

@Component({
    selector: 'viewport',
    template: `
    <p-menubar>
        <ul>
            <li>
                <a [routerLink]="['Home']">Home</a>
            </li>
            <li>
                <a [routerLink]="['Users']">Users</a>
            </li>
            <li>
                <a [routerLink]="['About']">About</a>
            </li>
        </ul>
    </p-menubar>

    <router-outlet></router-outlet>
    `,
    directives: [
        ROUTER_DIRECTIVES,
        Menubar
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