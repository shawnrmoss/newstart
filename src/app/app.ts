/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {ProtectedDirective} from './directives/protected.directive';

import {HomePage} from './components/home-page/home-page';
import {LoginPage} from '../accountservices/components/login-page/login-page';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, ProtectedDirective],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/login', component: LoginPage, name: 'LoginPage', useAsDefault: true },
  { path: '/**', redirectTo: ['LoginPage'] }
])
export class App {
  constructor() {
  }
}
