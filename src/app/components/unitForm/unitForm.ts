import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, RouterLink } from 'angular2/router';
import {UnitService} from '../../services/units.service';
import {Unit} from '../../datatypes/unit';

@Component({
  selector: 'unit-form',
  templateUrl: require('./unitForm.html')
})
export class UnitForm {
  
                      
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
                    
               
  
  submitted = false;
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.unit); }
}