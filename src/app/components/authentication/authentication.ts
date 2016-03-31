import {Component} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';


import {UserService} from '../../services/user';
import {AjaxService} from '../../services/ajax';
import {AbstractComponent} from "../abstract/abstract.component";


@Component({
    selector: 'authentication',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [UserService, AjaxService],
    template: require('./authentication.html'),
    styles: [require('./authentication.scss')]
})

export class Authentication extends AbstractComponent {

    public loginErrors: string[] = [];

    public signupErrors: string[] = [];

    public resetPasswordErrors: string[] = [];

    public activeFormPanel: string = 'login';


    constructor(public router: Router,
                public userService: UserService) {
        super();
    }

    login(event, username, password) {
        event.preventDefault();

        var me = this;
        this.userService.login(username, password, function (response) {
            if (!response.success) {
                me.loginErrors = response.errors;
            } else {
                me.router.parent.navigateByUrl('/');
            }
        });
    }

    loginWithFaceBook(event) {
        event.preventDefault();
    }

    signup(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    }

    setForm(event, name) {
        event.preventDefault();
        switch (name) {
            case 'login':
            case 'signup':
                this.activeFormPanel = name;
                break;
            default:
                this.activeFormPanel = 'login';

        }
    }
}
