/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthenticatedApp} from './components/authenticatedapp/authenticatedapp';
import {Login} from './components/login/login';

import '../assets/scss/main.scss';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',  
  directives: [ ...ROUTER_DIRECTIVES],  
  template: require("./app.html")
})
@RouteConfig([
  { path: '/authenticatedapp/...', component: AuthenticatedApp, name: 'Authenticated' },
  { path: '/login', component: Login, name: 'Login', useAsDefault: true },   
  { path: '/**', redirectTo: ['Login'] }
])
export class App { 
  constructor() {
  }
}
