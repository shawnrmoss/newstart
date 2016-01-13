import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'unitservicelist',  
  template: require('./unitservicelist.html'),
  directives: [RouterLink]
})
export class UnitServiceList {
   constructor() {
   }             
}
  
