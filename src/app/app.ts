/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {ProtectedDirective} from './directives/protected.directive';
import {LoggedInRouterOutlet} from './directives/loggedinrouteroutlet.directive';

import {HomePage} from './pages/home-page/home-page';
import {LoginPage} from './pages/login-page/login-page';
import {UnitsPage} from './pages/units-page/units-page';



import '../assets/scss/main.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, ProtectedDirective, LoggedInRouterOutlet],  
  template: `<loggedin-router-outlet></loggedin-router-outlet>`
})
@RouteConfig([
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/login', component: LoginPage, name: 'LoginPage' },
  { path: '/units', component: UnitsPage, name: 'UnitsPage' },  
  { path: '/**', redirectTo: ['HomePage'] }
])
export class App {
  constructor() {
  }
}
