import {enableProdMode, provide} from "angular2/core";
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {UserService} from './app/services/user';
import {AjaxService} from './app/services/ajax';


const ENV_PROVIDERS = [];
if (process.env.ENV === 'prod') {
    enableProdMode();
} else {
    ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

import {App} from './app/app';

document.addEventListener('DOMContentLoaded', function main() {
    return bootstrap(App, [
        // These are dependencies of our App
        UserService,
        AjaxService,
        ...HTTP_PROVIDERS,
        ...ROUTER_PROVIDERS,
        ...ENV_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}), // use #/ routes, remove this for HTML5 mode
        provide(AuthHttp, {
            useFactory: (http) => {
                return new AuthHttp(new AuthConfig({
                    tokenName: 'jwt'
                }), http);
            },
            deps: [Http]
        })
    ])
        .catch(err => console.error(err));
});
