import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {UnitTable} from '../unittable/unittable';

@Component({
  selector: 'units-container',
  template: require('./unitsContainer.html'),
  providers: [],
  directives: [UnitTable]
})
export class UnitsContainer {  
  constructor() {}        
}