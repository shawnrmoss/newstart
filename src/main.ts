import {WindowService} from './app/services/window.service';
import {AuthService} from './accountservices/services/auth.service';
import {CookieService} from './app/services/cookie.service';
import {DialogService} from './app/services/dialog.service';
import {CallbackComponent} from './accountservices/components/callback';

import {provide} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, PathLocationStrategy, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {COMMON_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(App,
            [
                ...('production' === process.env.ENV ? [] : ELEMENT_PROBE_PROVIDERS),
                CookieService,
                AuthService,
                WindowService,
                DialogService,
                MATERIAL_DIRECTIVES,
                MATERIAL_PROVIDERS,
                COMMON_DIRECTIVES,
                ...FORM_DIRECTIVES,
                ROUTER_DIRECTIVES,
                ROUTER_PROVIDERS,
                HTTP_PROVIDERS,
                provide(LocationStrategy, {useClass: HashLocationStrategy})]
  ).catch(err => console.error(err));
});
