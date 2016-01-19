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
  public unit: Unit;
  
  constructor(
    private _service: UnitService,
    private _router: Router,
    private _params: RouteParams
    ) {}
  
  ngOnInit() {
    let unitID = this._params.get('id');    
    this._service.getUnit(unitID).subscribe(res => this.unit = res);        
  }
  
 
}