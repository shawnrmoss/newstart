/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {LoggedInRouterOutlet} from './directives/loggedinrouteroutlet.directive';

import {HomePage} from './pages/home-page/home-page';
import {LoginPage} from './pages/login-page/login-page';
import {UnitsPage} from './pages/units-page/units-page';
import {UnitDetailsPage} from './pages/unitDetails-page/unitDetails-page';
import {DriversPage} from './pages/drivers-page/drivers-page';
import {MileagePage} from './pages/mileage-page/mileage-page';
import {LocationsPage} from './pages/locations-page/locations-page';
import {HelpPage} from './pages/help-page/help-page';
import {AboutPage} from './pages/about-page/about-page';
import {LogoffPage} from './pages/logoff-page/logoff-page';
import {UsersPage} from './pages/users-page/users-page';
import {SettingsPage} from './pages/settings-page/settings-page';

import '../assets/scss/main.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, LoggedInRouterOutlet],  
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/login', component: LoginPage, name: 'LoginPage', useAsDefault: true},
  { path: '/units', component: UnitsPage, name: 'UnitsPage' },  
  { path: '/units/:id', component: UnitDetailsPage, name: 'UnitDetailsPage' },
  { path: '/units/create', component: UnitDetailsPage, name: 'CreateUnit' },
  { path: '/drivers', component: DriversPage, name: 'DriversPage' },  
  { path: '/mileage', component: MileagePage, name: 'MileagePage' },  
  { path: '/locations', component: LocationsPage, name: 'LocationsPage' },  
  { path: '/help', component: HelpPage, name: 'HelpPage' },  
  { path: '/aboutus', component: AboutPage, name: 'AboutPage' },  
  { path: '/logoff', component: LogoffPage, name: 'LogoffPage' },
  { path: '/settings', component: SettingsPage, name: 'SettingsPage' },  
  { path: '/users', component: UsersPage, name: 'UsersPage' },      
  { path: '/**', redirectTo: ['HomePage'] }
])
export class App {
  constructor() {
  }
}
