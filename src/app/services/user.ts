import {Injectable} from 'angular2/core';
import {AjaxService} from './ajax';
//import {appConfig} from '../app.config';

@Injectable()

export class UserService {

    constructor(private ajax: AjaxService) {
    }

    isAuthenticated(): boolean {
        return (localStorage.getItem('jwt') !== null);
    }


    login(username: string, password: string, callback: any) {

        localStorage.setItem('jwt', 'fakeKey');
        callback({
            success: true,
        });
        /*

         this.ajax.send({
         method: 'post',
         requiresAuth: true,
         url: appConfig.api.baseUrl + appConfig.api.paths.login,
         params: JSON.stringify({username, password})
         }).subscribe(
         response => {
         if (response.id_token !== undefined) {
         localStorage.setItem('jwt', response.id_token);
         callback({
         success: true
         });
         } else {
         callback({
         success: false,
         errors: [response.error]
         });
         }
         },
         error => callback({
         success: false,
         errors: [error.text()]
         })
         );

         */
    }

    logout(callback: any) {
        localStorage.removeItem('jwt');
        callback();
    }
}
