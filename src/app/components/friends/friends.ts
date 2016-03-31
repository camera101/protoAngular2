import {Component, OnInit} from 'angular2/core';
import {AjaxService} from './../../services/ajax';
import {AbstractComponent} from "../abstract/abstract.component";

@Component({
    selector: 'friends',
    directives: [],
    providers: [AjaxService],
    pipes: [],
    styles: [require('./friends.scss')],
    template: require('./friends.html')
})

export class Friends extends AbstractComponent implements OnInit {

    public friends = [
        {"user_id": 1, "name": "Johnny John", "score": 88, "activity": 50, "friends": 10},
        {"user_id": 2, "name": "Johnny Not", "score": 76, "activity": 70, "friends": 22},
        {"user_id": 3, "name": "Another Johnny", "score": 0, "activity": 0, "friends": 1},
        {"user_id": 4, "name": "Joanna Hope", "score": 45, "activity": 50, "friends": 12},
        {"user_id": 5, "name": "Johnny Again", "score": 10, "activity": 56, "friends": 9}
    ];

    constructor(public ajax: AjaxService) {
        super();
    }

    ngOnInit() {
        /*   this.ajax.send({
         url: appConfig.api.baseUrl + appConfig.api.paths.friendsList,
         }).subscribe(
         response => {
         this.friends = response;
         },
         error => {
         console.error(error);
         }
         );*/
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
