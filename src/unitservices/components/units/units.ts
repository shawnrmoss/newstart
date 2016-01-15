import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, Router, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {UnitService} from '../../services/unitservice';
import {Unit} from '../../datatypes/unit';

import {UnitTableContainer} from '../unittablecontainer/unittablecontainer';
import {UnitDetailContainer} from '../unitdetailcontainer/unitdetailcontainer';

import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';
import './units.scss';

@Component({
  selector: 'units',
  template: require('./units.html'),  
  providers: [UnitService, MATERIAL_PROVIDERS],
  directives: [ ...ROUTER_DIRECTIVES, RouterOutlet, MATERIAL_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: UnitTableContainer, name: 'UnitTable', useAsDefault: true },
  { path: '/new', component: UnitDetailContainer, name: 'AddNewUnit' },
  { path: '/:id', component: UnitDetailContainer, name: 'EditUnit' },
  { path: '/**', redirectTo: ['UnitTable'] }
])
export class Units {
    
    constructor(
        public _router: Router
    ) {}       
}    
