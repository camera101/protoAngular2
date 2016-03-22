import {Injectable} from 'angular2/core';
import {AjaxService} from "../../services/ajax.service";

@Injectable()

export class UsersService {

    private baseUrl = 'http://localhost:8080';

    constructor (
        private ajax:AjaxService
    ) {}

    getUsers(options: any) {
        this.ajax.sendGet({
            url: this.baseUrl + '/api/get/1',
            success: options.success || function(){},
            error: options.error || function () {},
            after: options.after || function () {}
        });
    }

    setUsers(options: any) {

        this.ajax.sendPost({
            url: this.baseUrl + '/api/what',
            params: options.params || {},
            success: options.success || function(){},
            error: options.error || function () {},
            after: options.after || function () {}
        });
    }

}