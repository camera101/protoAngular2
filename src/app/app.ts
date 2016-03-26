import {Component, ElementRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';

import {Home} from './components/home/home';
import {About} from "./components/about/about";
import {Users} from "./components/users/users";

@Component({
    selector: 'app',
    providers: [...FORM_PROVIDERS],
    directives: [...ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./app.scss')],
    template: require('./app.html')
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home'},
    {path: '/About', component: About, name: 'About'},
    {path: '/Users', component: Users, name: 'Users'}
])
export class App {
    url: string = 'https://github.com/preboot/angular2-webpack';

    title: string = 'Angular 2 Starter App';

    constructor(private el: ElementRef) {
    }
}
