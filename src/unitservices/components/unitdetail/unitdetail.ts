import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

import {UnitService} from '../../services/unitservice';
import {Unit} from '../../datatypes/unit';

@Component({
  selector: 'unitdetail',
  template: require('./unitdetail.html')    
})
export class UnitDetail  {
  unit: Unit;
  editName: string;
  constructor(
    private _service: UnitService,
    private _router: Router,
    private _routeParams: RouteParams
  ) { }    
}
