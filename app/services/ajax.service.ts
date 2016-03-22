import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";


@Injectable()

export class AjaxService {

    private requestCount = 0;

    constructor(private http:Http) {
    }

    sendGet(config: any) {
        if (!config.url) console.error('Ajax Service: URL param not defined');

        this.requestCount++;
        this.http.get(config.url)
            .map(function (res) {
                res.json();
            })
            .subscribe(
                function (data) {
                    config.success ? config.success(data) : null;
                },
                function (error) {
                    config.error ? config.error(error) : null;
                },
                function () {
                    this.requestCount--;
                    config.after ? config.after() : null;
                }
            )
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
                var paramString = paramArray.join('&');
            }
        }
        me.requestCount++;
        me.http.post(config.url, paramString, {
                headers: function () {
                    var headers = new Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return headers;
                }()
            })
            .map(function (res) {
                res.json();
            })
            .subscribe(
                function (data) {
                    config.success ? config.success(data) : null;
                },
                function (error) {
                    config.error ? config.error(error) : null;
                },
                function () {

                    this.requestCount--;
                    config.after ? config.after() : null;
                }
            )
    }
}