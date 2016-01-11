import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import './unitservicelist.scss';
let template = require('./unitservicelist.html');

@Component({
  selector: 'unitservicelist',
  template: template,
  directives: [RouterLink]
})
export class UnitServiceList {
   constructor() {
   }             
}
  
