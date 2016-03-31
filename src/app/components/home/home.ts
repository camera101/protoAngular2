import {Component, OnInit} from 'angular2/core';
import {AbstractComponent} from "../abstract/abstract.component";

@Component({
    selector: 'home',
    directives: [],
    pipes: [],
    styles: [require('./home.scss')],
    template: require('./home.html')
})

export class Home extends AbstractComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
        console.log('Hello Home');
    }
}
