import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from '../home/home';
import {Header} from '../header/header';

import './authenticatedapp.scss';

@Component({
  selector: 'authenticatedapp',
  template: require('./authenticatedapp.html'),  
  directives: [...ROUTER_DIRECTIVES, Header],
  pipes: []
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true  },     
  { path: '/**', redirectTo: ['Home'] }
])
export class AuthenticatedApp {

  constructor() {}

}

