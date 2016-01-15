/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';

import {Home} from './components/home/home';
import {Login} from '../accountservices/components/login/login';
import {UnitServices} from '../unitservices/unitservices';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, RouterOutlet],
  template: `<router-outlet></router-outlet>`
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
