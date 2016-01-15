/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {ProtectedDirective} from './directives/protected.directive';
import {LoggedInRouterOutlet} from './directives/loggedinrouteroutlet.directive';

import {Home} from './components/home/home';
import {Login} from '../accountservices/components/login/login';
import {UnitServices} from '../unitservices/unitservices';

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
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login', useAsDefault: true },
  { path: '/unitservices/...', component: UnitServices, name: 'UnitServices' },
  { path: '/**', redirectTo: ['Login'] }
])
export class App {
  constructor() {
  }
}
