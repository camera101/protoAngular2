import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {AuthHttp} from 'angular2-jwt';
import {Headers} from "angular2/http";
import 'rxjs/add/operator/map';
import {appConfig} from "../app.config";

@Injectable()

export class AjaxService {

    private headers: Headers;

    public constructor(private http: Http,
                private authHttp: AuthHttp) {

        this.headers = new Headers();
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
    }

    public send(config: any) {
        var callType = (config.requiresAuth && appConfig.api.enableSecuredRoutes) ? 'authHttp' : 'http';
        if (!config.url) {
            console.error('Ajax Service: URL not defined');
        }

        if (!config.method) {
            return this.sendGet(config, callType);

        } else if (config.method === 'get') {

            return this.sendGet(config, callType);

        } else if (config.method === 'post') {

            return this.sendPost(config, callType);

        }
    }

    private sendGet(config: any, callType: string) {

        return this[callType].get(config.url)
            .map(res => res.json());
    }

    private sendPost(config: any, callType: string) {
        var me = this;

        return me[callType].post(
            config.url,
            config.params || {},
            {
                headers: me.headers
            }).map(res => res.json());
    }
}
