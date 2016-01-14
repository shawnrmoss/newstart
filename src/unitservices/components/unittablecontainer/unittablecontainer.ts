import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';

import {UnitTable} from '../unittable/unittable';

import './unittablecontainer.scss';

@Component({
  selector: 'unit-table-container',
  template: require('./unittablecontainer.html'),
  providers: [MATERIAL_PROVIDERS],
  directives: [MATERIAL_DIRECTIVES, UnitTable]
})
export class UnitTableContainer {  
  constructor() {}    
}