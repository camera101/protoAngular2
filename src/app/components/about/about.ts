import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'about',
    template: require('./about.html'),
    styles: [require('./about.scss')],
    providers: [],
    directives: [],
    pipes: []
})
export class About implements OnInit {

    constructor() {
        //constructor
    }

    ngOnInit() {
        console.log('Hello About');
    }
}
