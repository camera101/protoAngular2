import { Component, OnInit } from 'angular2/core';
import {InputText} from 'primeng/primeng';

@Component({
    selector: 'page',
    template: `
    <div class="container">
        <div class="page-header">
            <h1>Home Page</h1>
        </div>
        <input type="text" pInputText/>
        <p class="lead">Lorem ipsum and all that blablabla</p>
    </div>
    `,
    directives: [InputText]
})

export class HomePage implements OnInit{


    constructor( ) {}

    ngOnInit() { }
}
