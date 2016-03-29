import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {appConfig} from '../app.config';

@Directive({
    selector: 'router-outlet'
})
export class CustomRouterOutlet extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;

    constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
                _parentRouter: Router, @Attribute('name') nameAttr: string) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;

        this.publicRoutes = appConfig.publicRoutes;
    }

    activate(instruction: ComponentInstruction) {
        var url = instruction.urlPath;

        if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
            this.parentRouter.navigateByUrl('/authentication');
        } else if (url === 'authentication' && localStorage.getItem('jwt')) {
            this.parentRouter.navigateByUrl('/');
        }
        return super.activate(instruction);

    }
}
