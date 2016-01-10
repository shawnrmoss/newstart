import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

import {UnitDashboard} from './unitdashboard/unitdashboard';
import {Units} from './units/units';

import './unitservices.scss';

@Component({
  selector: 'unitservices',
  providers: [ ],
  directives: [ ...ROUTER_DIRECTIVES ],
  pipes: [],
  styles: [],
  template: require("./unitservices.html")
})
@RouteConfig([
  { path: '/', component: UnitDashboard, name: 'UnitDashboard', useAsDefault: true },
  { path: '/units', component: Units, name: 'Units' },
  { path: '/**', redirectTo: ['UnitDashboard'] }
])
export class UnitServices {
  constructor() {
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
