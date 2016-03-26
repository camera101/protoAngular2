import {Injectable} from 'angular2/core';
import {AjaxService} from '../../services/ajax';
import {User} from './user.interface';

@Injectable()

export class UsersService {

    private baseUrl = 'http://localhost:8080';

    constructor (private ajax: AjaxService) {}

    listUsers() {
        return this.ajax.sendGet({
            url: this.baseUrl + '/api/getAll'
        })
    }

    getUser(userId: number) {}

    createUser(user:User) {
        return this.ajax.sendPost({
            url: this.baseUrl + '/api/what',
            params: user
        })
    }

    deleteUser(userId: number) {}

    updateUser(user: User) {}
}