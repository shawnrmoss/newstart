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
            
  unit = new Unit(0, 
                    0,
                    0,
                    '3000897',
                    2015,
                    'Toyota',
                    'Tundra',
                    '',
                    '',
                    true,
                    null,
                    24,
                    1,
                    true,
                    null, //Created by userID set here or on server
                    null,
                    new Date(),
                    null, 
                    null, 
                    null
                    );
  
  constructor(
    private _service: UnitService,
    private _router: Router,
    private _params: RouteParams
    ) {}
  
  ngOnInit() {
    let unitID = this._params.get('id');    
    console.log(unitID);
    //this._service.getUnit(unitID).subscribe(res => this.unit = res);      
    
    console.log(this.unit);  
  }
  
 
}