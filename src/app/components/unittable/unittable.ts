import {Component, OnInit} from 'angular2/core';
import {Router, RouterLink } from 'angular2/router';
import {UnitService} from '../../services/units.service';
import {Unit} from '../../datatypes/unit';

import './unittable.scss';

@Component({
  selector: 'unit-table',  
  template: require('./unittable.html'),
  providers: [UnitService],
  directives: [RouterLink]
})
export class UnitTable implements OnInit {
  units: Array<Unit>;
  
  constructor(
    private _service: UnitService,
    private _router: Router) {}
  
  ngOnInit() {
    this._service.getUnits().subscribe(res => this.units = res);
    
     console.log(this.units);
  }
  
  onSelect(unit: Unit){
   
    this._router.navigate( ['UnitDetail', { id: unit.unitID }] );
  }
  
}
