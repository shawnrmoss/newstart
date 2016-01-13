import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Unit, UnitCentralServices} from './../unitcentralservices.service';

@Component({
  selector: 'unitlist',
  template: require('./unitlist.html')
})
export class UnitList implements OnInit {
  units: Unit[];
  
  constructor(
    private _service: UnitCentralServices,
    private _router: Router) {}
  
  ngOnInit() {
    this._service.getUnits().then(retrievedUnits => this.units = retrievedUnits);
  }
  
  onSelect(unit: Unit){
    this._router.navigate( ['UnitDetail', { id: unit.id }] );
  }
}