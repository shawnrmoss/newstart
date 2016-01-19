import {Component, OnInit} from 'angular2/core';
import {Router, RouterLink } from 'angular2/router';
import {UnitService} from '../../services/units.service';
import {Unit} from '../../datatypes/unit';

import './unitDetail.scss';

@Component({
  selector: 'unit-detail',  
  template: require('./unitDetail.html'),
  providers: [UnitService],
  directives: []
})
export class UnitTable implements OnInit {
  units: Array<Unit>;
  
  constructor(
    private _service: UnitService,
    private _router: Router) {}
  
  ngOnInit() {
    this._service.getUnit(1).subscribe(res => this.units = res);;
  }
  
 
}