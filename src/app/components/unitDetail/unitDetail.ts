import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, RouterLink } from 'angular2/router';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

//Services
import {UnitService} from '../../services/units.service';

//Components
import {Unit} from '../../datatypes/unit';
import {UnitStatus} from '../../datatypes/unitstatus';

import './unitDetail.scss';

@Component({
  selector: 'unit-detail',  
  template: require('./unitDetail.html'),
  providers: [UnitService],
  directives: [MATERIAL_DIRECTIVES],
})
export class UnitDetail implements OnInit {   
  private unitStatuses: Array<UnitStatus>; 
  private SUBMIT_ACTION: string;  
  //We use this array to bind to the Unit Statuses select list.
  submitted = false;
  public loading: boolean;    
  public selectedStatus: string;
  public statuses: Array<string>;
  
  public unit: Unit;            
  
  
  //Initialize in the constructor set class variables etc
  constructor(
    private unitService: UnitService,
    private _router: Router,
    private _params: RouteParams
    ) {         
        //initia an empty unit to bind to                          
        this.unit = new Unit(0, 
                             null, 
                             null, 
                             '', 
                             null, 
                             '', 
                             '', 
                             '', 
                             '', 
                             false, //IsPoolUnit 
                             null, 
                             0, 
                             0, 
                             false, //Factory Stock
                             null, 
                             '', 
                             new Date(), 
                             null, 
                             null, 
                             null);
        this.unitService.getUnitStatuses().subscribe(res => {
            this.unitStatuses = res;      
            
            //This is necessary because we can not bind a object to a select list 
            //but we need the id to post later.            
            var arrayLength = this.unitStatuses.length;
            this.statuses = [];
            var myStringArray = [];
            for (var i = 0; i < arrayLength; i++) {
                this.statuses.push(this.unitStatuses[i].name);                
            }      
        });                
  }
  
  //Then you have a chance to re-initialize when the dom is ready.
  ngOnInit() {        
    let unitID = this._params.get('id');           
    if(!isNaN(parseInt(unitID))) 
    {       
        this.SUBMIT_ACTION = 'UPDATE';
        this.unitService.getUnit(unitID)
        .subscribe(res => {           
            this.unit = res        
            this.loading = false;                                           
        });                            
    }  
    else{
        this.SUBMIT_ACTION = 'CREATE';        
    }                                    
  }
  
  onChange(deviceValue) {
    this.selectedStatus = deviceValue;
  }

  onSubmit() {             
      this.submitted = true; 
      let response = null;      
      
      //Get the id of the currently select unit status and update the unit      
      let target = this.selectedStatus;       
      let arrayLength = this.unitStatuses.length;                
      for (var i = 0; i < arrayLength; i++) {
        if(this.unitStatuses[i].name === target) this.unit.unitStatusID = this.unitStatuses[i].unitStatusID;
      }         
      
      switch(this.SUBMIT_ACTION) {
        case "CREATE":
            //Call the create unit function from the unit service
            this.unitService.createUnit(this.unit).subscribe(
                this._router.navigate( ['UnitsPage'] )
            );
            break;
        case "UPDATE":
            //Call the update unit function from the unit service
            // / 
            this.unitService.updateUnit(this.unit).subscribe(res => {                                  
                this._router.navigate( ['UnitsPage'] )
            });
            break;               
      }           
  }

  
    
}