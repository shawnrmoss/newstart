import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';

//Services
import {UnitService} from '../../services/units.service';

//Components
//import {UnitTable} from '../unittable/unittable';

@Component({
  selector: 'units-container',
  template: require('./unitsContainer.html'),
  providers: [MATERIAL_PROVIDERS],
  directives: [MATERIAL_DIRECTIVES]
})
export class Units {  
  constructor(
    private _service: UnitService,
    private _router: Router) {}    
  
  onSearch(){
    console.log('Search button click: not implemented');   
  }
  
  onAdd(){   
    this._router.navigate( ['AddNewUnit'] );
  }
}