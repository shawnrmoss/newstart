import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {UnitService} from '../../services/unitservice';
import {Unit} from '../../datatypes/unit';

import './unittable.scss';

@Component({
  selector: 'unit-table',
  template: require('./unittable.html')
})
export class UnitTable implements OnInit {
  units: Array<Unit>;
  
  constructor(
    private _service: UnitService,
    private _router: Router) {}
  
  ngOnInit() {
    this._service.getUnits().subscribe(res => this.units = res);;
  }
  
  onSelect(unit: Unit){
    console.log(unit);
    this._router.navigate( ['UnitDetail', { id: unit.unitID }] );
  }
}