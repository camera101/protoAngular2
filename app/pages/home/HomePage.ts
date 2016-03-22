import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'page',
    template: `
    <div class="container">
        <div class="page-header">
            <h1>Home Page</h1>
        </div>
        <p class="lead">Lorem ipsum and all that blablabla</p>
    </div>
    `
})

export class HomePage implements OnInit{


    constructor( ) {}

    ngOnInit() { }
}