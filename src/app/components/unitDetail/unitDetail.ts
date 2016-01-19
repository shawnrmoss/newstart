import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, RouterLink } from 'angular2/router';
import {UnitService} from '../../services/units.service';
import {Unit} from '../../datatypes/unit';
import {UnitStatus} from '../../datatypes/unitstatus';

import './unitDetail.scss';

@Component({
  selector: 'unit-detail',  
  template: require('./unitDetail.html'),
  providers: [UnitService],
  directives: []
})
export class UnitDetail implements OnInit {   
  public unitStatuses: string[];   
  public unit: Unit;            
    
  constructor(
    private unitService: UnitService,
    private _router: Router,
    private _params: RouteParams
    ) {                                  
        this.unit = new Unit(0,0, 0, '', null, '', '', '', '', null, null, 0, 0, false, null, null, new Date(), null, null, null );
        this.unitService.getUnitStatuses().subscribe(res => {
            this.unitStatuses = res;            
        });
  }
  
  submitted = false;

  onSubmit() { 
      this.submitted = true; 
      let response = null;
      
      
      //this.unitService.createUnit(this.unit).subscribe(res => response = res);        
  }

  ngOnInit() {        
    let unitID = this._params.get('id');  
    if(unitID != "0") 
    {
        let tempUnit = null;
        this.unitService.getUnit(unitID).subscribe(res => tempUnit = res);            
    }                                      
  }
    
}