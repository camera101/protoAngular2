import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'home',
    directives: [],
    pipes: [],
    styles: [require('./home.scss')],
    template: require('./home.html')
})

export class Home implements OnInit {

    constructor() {
        //constructor
    }

    ngOnInit() {
        console.log('Hello Home');
    }
}
