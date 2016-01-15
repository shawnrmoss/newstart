import { Component } from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';
import { Router, RouteParams } from 'angular2/router';
import { MdPatternValidator, MdMinValueValidator, MdNumberRequiredValidator, MdMaxValueValidator, MATERIAL_DIRECTIVES } from 'ng2-material/all';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup } from 'angular2/common';

import { RequestOptions, RequestMethod } from 'angular2/http';

import {UnitService} from '../../services/unitservice';
import {Unit} from '../../datatypes/unit';

import './unitdetailform.scss';

@Component({
  selector: 'unit-detail-form',
  template: require('./unitdetailform.html'),
  directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class UnitDetailForm {
    unitForm: ControlGroup;
    message: string;
    unit = Unit;
    
    //^\d{4}$ Valid year regex
    
    constructor(
        fb: FormBuilder,
        private http: Http,
        private router: Router,         
        private routeParams: RouteParams,
        private service: UnitService) {                       
    }    
}
