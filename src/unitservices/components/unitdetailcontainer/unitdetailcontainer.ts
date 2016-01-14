import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';

import {UnitService} from '../../services/unitservice';
import {UnitDetailForm} from '../unitdetailform/unitdetailform';

import './unitdetailcontainer.scss';

@Component({
  selector: 'unit-detail-form',
  template: require('./unitdetailcontainer.html'),
  providers: [MATERIAL_PROVIDERS],
  directives: [MATERIAL_DIRECTIVES, UnitDetailForm]
})
export class UnitDetailContainer {  
  constructor(
    private _service: UnitService,
    private _router: Router) {}    
  
  onDelete(){
    console.log('Delete button click: not implemented');   
  }
  
  onSave(ev: any){
    console.log('Delete button click: not implemented');   
  }
  
  onCancel(ev){   
     this._router.navigate( ['UnitTable'] );
  }
}