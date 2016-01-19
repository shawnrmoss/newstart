import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

//Services
import {UnitService} from '../../services/units.service';

//Components
//import {UnitTable} from '../unittable/unittable';

@Component({
  selector: 'units-container',
  template: require('./unitsContainer.html'),
  providers: [],
  directives: []
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