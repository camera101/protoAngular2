import {Component, OnInit} from 'angular2/core';
import {AjaxService } from './../../services/ajax';
import {appConfig} from './../../app.config';


@Component({
    selector: 'friends',
    directives: [],
    providers: [AjaxService],
    pipes: [],
    styles: [require('./friends.scss')],
    template: require('./friends.html')
})

export class Friends implements OnInit {

    public friends  = [];

    constructor(public ajax: AjaxService) {
    }

    ngOnInit() {
        this.ajax.send({
            url: appConfig.api.baseUrl + appConfig.api.paths.friendsList,
        }).subscribe(
            response => {
                this.friends = response;
            },
            error => {
                console.error(error);
            }
        );
    }

    getRandomPaletteColor() {
        var colorPalette = [
            '#2EB299',
            '#46BB9B',
            '#6EC49C',
            '#7EC99D',
            '#A4D49D',
            '#B5DA9F'
        ];
        
        var random = Math.floor(Math.random() * (colorPalette.length - 1));
        
        return colorPalette[random];
        
    }
}
