import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, RouterLink } from 'angular2/router';
import {UnitService} from '../../services/units.service';
import {Unit} from '../../datatypes/unit';

import './unitDetail.scss';

@Component({
  selector: 'unit-detail',  
  template: require('./unitDetail.html'),
  providers: [UnitService],
  directives: []
})
export class UnitDetail implements OnInit {
  
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
   
  public unit: Unit;          
    
  constructor(
    private _service: UnitService,
    private _router: Router,
    private _params: RouteParams
    ) {   
        //Initialize and new unit by default.     
        this.unit = new Unit(0,0, 0, '', null, '', '', '', '', null, null, 0, 0, false, null, null, new Date(), null, null, null );
  }
  
  submitted = false;

  onSubmit() { 
      this.submitted = true; 
      let response = null;
      this._service.createUnit(this.unit).subscribe(res => response = res);        
  }

  ngOnInit() {
    let unitID = this._params.get('id');  
    if(unitID != "0") 
    {
        let tempUnit = null;
        this._service.getUnit(unitID).subscribe(res => tempUnit = res);            
    }                                      
  }
  
 
}