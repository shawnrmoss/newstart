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
    
    constructor(
        fb: FormBuilder,
        private http: Http,
        private router: Router,         
        private routeParams: RouteParams,
        private service: UnitService) {
                                    
            this.unitForm = fb.group({
                'unitNumber': [unit.unitNumber, Validators.compose([
                    Validators.required,
                    Validators.maxLength(50)
                ])],
                'year': [unit.year, Validators.compose([               
                    Validators.number
                ])],
                'make': [unit.make, Validators.compose([                                
                    Validators.minLength(1),
                    Validators.maxLength(30)
                ])],
                'model': [unit.model, Validators.compose([                                
                    Validators.minLength(1),
                    Validators.maxLength(30)
                ])],
                'trim': [unit.trim, Validators.compose([                                
                    Validators.minLength(1),
                    Validators.maxLength(30)
                ])],
                'vin': [unit.vin, Validators.compose([                                
                    Validators.minLength(1),
                    Validators.maxLength(17)
                ])],
                'isPoolUnit': [unit.isPoolUnit],
                'inServiceDate': [unit.inServiceDate],
                'term': [unit.term, Validators.compose([                                
                    Validators.number                
                ])],
                'costCenter': [unit.costCenter, Validators.compose([                                
                    Validators.number                
                ])],
                'factoryStock': [unit.factoryStock])];
            }]
    }    
}
