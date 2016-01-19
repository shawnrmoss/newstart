import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';

@Component({
  selector: 'sidebar',  
  template: require('./sidebar.html'),  
  providers: [MATERIAL_PROVIDERS],
  directives: [RouterLink, MATERIAL_DIRECTIVES]  
})
export class Sidebar {
   constructor() {
   }             
}
  