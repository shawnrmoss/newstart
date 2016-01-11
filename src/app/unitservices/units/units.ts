import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, Router, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {UnitCentralServices} from './../unitcentralservices.service';

import {UnitList} from '../unitlist/unitlist';
import {UnitDetail} from '../unitdetail/unitdetail';

@Component({
  selector: 'units',
  template: require('./units.html'),
  directives: [ ...ROUTER_DIRECTIVES, RouterOutlet],
  providers: [UnitCentralServices]
})
@RouteConfig([
  { path: '/', component: UnitList, name: 'UnitList', useAsDefault: true },
  { path: '/new', component: UnitDetail, name: 'AddNewUnit' },
  { path: '/:id', component: UnitDetail, name: 'EditUnit' },
  { path: '/**', redirectTo: ['UnitList'] }
])
export class Units {
    
    constructor(
        public _router: Router
    ) {}
    
    addUnit(){
      this._router.navigate( ['AddNewUnit'] );
    }
}    
