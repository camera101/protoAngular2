import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";

@Injectable()

export class AjaxService {

    constructor(private http:Http) {
    }

    sendGet(config: any) {
        if (!config.url) console.error('Ajax Service: URL param not defined');

        return this.http.get(config.url)
            .map(res => res.json())
    }

    sendPost(config: any) {
        var paramString = '',
            me = this;

        if (!config.url) console.error('Ajax Service: URL param not defined');

        if (config.params) {
            var paramArray: any[] = [];
            for (var param in config.params) {
                if (config.params.hasOwnProperty(param)) {
                    paramArray.push(param + '=' + JSON.stringify(config.params[param]));
                }
            }
            if (paramArray.length > 0) {
                paramString = paramArray.join('&');
            }
        }

        return me.http.post(config.url, paramString, {
                headers: function () {
                    var headers = new Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return headers;
                }()
            })
            .map(function (res) {
                res.json()
            })
    }
}