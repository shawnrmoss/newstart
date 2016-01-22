import { Http, Headers } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Unit } from '../datatypes/unit';
import { UnitStatus } from '../datatypes/unitstatus';
 
@Injectable()
export class UnitService {
    
    //private BASE_SERVICE_URL = 'http://localhost:65052/';
    private BASE_SERVICE_URL = 'http://summitapi.azurewebsites.net/';
    
    private jwt: string;
    private decodedJwt: string;
  
    constructor(public http: Http){                
        this.jwt = localStorage.getItem('jwt');                
    }    
       
    getUnits() { 
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        
        // return an observable
        return this.http.get(this.BASE_SERVICE_URL + 'api/units', {
            headers: headers
        })
        .map(res => res.json())  //Processes a result from the observable.  ie Fetchs payload of the http.get call.  Transforms raw hhtp response to javascript object
        .map((units: Array<any>) => {  //Second-level transformation into Value Objects
            let result:Array<Unit> = [];
            if (units) {                
                units.forEach((unit) => {
                    result.push(
                        //This maps it to our client side data type
                        new Unit(unit.UnitID, 
                                unit.ActivePlateID,
                                unit.UnitStatusID,
                                unit.UnitNumber,
                                unit.Year,
                                unit.Make,
                                unit.Model,
                                unit.Trim,
                                unit.VIN,
                                unit.IsPoolUnit,
                                unit.InServiceDate,
                                unit.Term,
                                unit.CostCenter,
                                unit.FactoryStock,
                                unit.CreatedByUserID,
                                unit.CreatedByUserName,
                                unit.CreatedOn,
                                unit.DeletedByUserID, 
                                unit.DeletedByUserName, 
                                unit.DeletedOn
                                ));
                });
            }
            return result;
        });
    }
    
    getUnit(id: string){
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        
        // return an observable
        return this.http.get(this.BASE_SERVICE_URL + 'api/units/' + id, {
            headers: headers
        })
        .map((responseData) => {            
            return responseData.json();
        })
        .map((unit: any) => {                                                                      
            return new Unit(unit.UnitID, 
                            unit.ActivePlateID,
                            unit.UnitStatusID,
                            unit.UnitNumber,
                            unit.Year,
                            unit.Make,
                            unit.Model,
                            unit.Trim,
                            unit.VIN,
                            unit.IsPoolUnit,
                            unit.InServiceDate,
                            unit.Term,
                            unit.CostCenter,
                            unit.FactoryStock,
                            unit.CreatedByUserID,
                            unit.CreatedByUserName,
                            unit.CreatedOn,
                            unit.DeletedByUserID, 
                            unit.DeletedByUserName, 
                            unit.DeletedOn
                            );
        });
    }
    
    createUnit(unit: Unit){        
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
                
        // create an object for the server must match the binding model for that route 
        // In this case it matches our CreateUnitBindingModel
        // Sometimes we have to transform data                
        let unitToCreate = {            
            "ActivePlateID" : unit.activePlateID,
            "UnitStatusID": unit.unitStatusID,
            "UnitNumber": unit.unitNumber,
            "Year" : unit.year,
            "Make" : unit.make,
            "Model": unit.model,
            "Trim" : unit.trim,
            "VIN" : unit.vin,
            "IsPoolUnit" : unit.isPoolUnit,
            "InServiceDate" : unit.inServiceDate,
            "Term" : unit.term,
            "CostCenter" : unit.costCenter,
            "FactoryStock" : unit.factoryStock          
        };
                
        //convert back to server unit type
        return this.http.post(this.BASE_SERVICE_URL + 'api/units', JSON.stringify(unitToCreate), {
            headers: headers
        }) 
        .map(res => res.json());
    }
    
    updateUnit(unit: Unit){        
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
                
        // create an object for the server must match the binding model for that route 
        // In this case it matches our CreateUnitBindingModel
        // Sometimes we have to transform data                
        let unitToUpdate = {      
            "UnitID" :  unit.unitID,  
            "ActivePlateID" : unit.activePlateID,
            "UnitStatusID": unit.unitStatusID,
            "UnitNumber": unit.unitNumber,
            "Year" : unit.year,
            "Make" : unit.make,
            "Model": unit.model,
            "Trim" : unit.trim,
            "VIN" : unit.vin,
            "IsPoolUnit" : unit.isPoolUnit,
            "InServiceDate" : unit.inServiceDate,
            "Term" : unit.term,
            "CostCenter" : unit.costCenter,
            "FactoryStock" : unit.factoryStock          
        };
                
        //convert back to server unit type
        return this.http.put(this.BASE_SERVICE_URL + 'api/units/' + unit.unitID, JSON.stringify(unitToUpdate), {
            headers: headers
        });
    }        
    
    getUnitStatuses(){
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        
        // return an observable
        return this.http.get(this.BASE_SERVICE_URL + 'api/units/statuses', {
            headers: headers
        })
        .map( (responseData) => {
            return responseData.json();
        })
        .map((unitStatuses: Array<any>) => {            
            let result:Array<UnitStatus> = [];
            if (unitStatuses) {                
                unitStatuses.forEach((unitStatus) => {
                    result.push(new UnitStatus(unitStatus.UnitStatusID, unitStatus.Name, unitStatus.Code));
                });
            }            
            return result;
        });
    }
        
}
