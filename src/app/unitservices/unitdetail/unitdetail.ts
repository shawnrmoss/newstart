import {Component, OnInit} from 'angular2/core';
import {Unit, UnitCentralServices} from './../unitcentralservices.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from '../../common/dialog.service';

@Component({
  selector: 'unitdetail',
  template: require('./unitdetail.html')    
})
export class UnitDetail implements OnInit, CanDeactivate {
  unit: Unit;
  editName: string;
  constructor(
    private _service: UnitCentralServices,
    private _router: Router,
    private _routeParams: RouteParams,
    private _dialog: DialogService
    ) { }
  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.getUnit(id).then(retrievedUnit => {
      if (retrievedUnit) {
        this.editName = retrievedUnit.name;
        this.unit = retrievedUnit;
      } else { // id not found
        this.gotoUnits();
      }
    });
  }
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : any {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
    if (!this.unit || this.unit.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this._dialog.confirm('Discard changes?');
  }
  cancel() {
    this.editName = this.unit.name;
    this.gotoUnits();
  }
  save() {
    this.unit.name = this.editName;
    this.gotoUnits();
  }
  gotoUnits() {
    // Like <a [routerLink]="['UnitList']">Units</a>
    this._router.navigate(['UnitList']);
  }
}
