import {bootstrap} from 'angular2/platform/browser';
import {Viewport} from './viewport';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from "angular2/router";
import {AjaxService} from "./services/ajax.service";

bootstrap(Viewport, [HTTP_PROVIDERS, ROUTER_PROVIDERS, AjaxService]);
