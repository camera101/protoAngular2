import {Component, OnInit} from 'angular2/core';
import {AbstractComponent} from "../abstract/abstract.component";

@Component({
    selector: 'about',
    template: require('./about.html'),
    styles: [require('./about.scss')],
    providers: [],
    directives: [],
    pipes: []
})
export class About extends AbstractComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
        console.log('Hello About');
    }
}
