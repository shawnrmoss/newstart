import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {UnitService} from '../../services/unitservice';
import {Unit} from '../../datatypes/unit';

@Component({
  selector: 'unitlist',
  template: require('./unitlist.html')
})
export class UnitList implements OnInit {
  units: Array<Unit>;
  
  constructor(
    private _service: UnitService,
    private _router: Router) {}
  
  ngOnInit() {
    this._service.getUnits().subscribe(res => this.units = res);;
  }
  
  onSelect(unit: Unit){    
    this._router.navigate( ['UnitDetail', { id: unit.unitID }] );
  }
}