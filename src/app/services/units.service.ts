import { Http, Headers } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Unit } from '../datatypes/unit';
import { UnitStatus } from '../datatypes/unitstatus';
 
@Injectable()
export class UnitService {
    
    private BASE_SERVICE_URL = 'http://localhost:65052/';
    //private BASE_SERVICE_URL = 'http://summitapi.azurewebsites.net/';
    
    private jwt: string;
    private decodedJwt: string;
  
    constructor(public http: Http){                
        this.jwt = localStorage.getItem('jwt');                
    }    
       
    getUnits() { 
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        
        // return an observable
        return this.http.get(this.BASE_SERVICE_URL + 'api/units', {
            headers: headers
        })
        .map( (responseData) => {
            return responseData.json();
        })
        .map((units: Array<any>) => {
            let result:Array<Unit> = [];
            if (units) {
                console.log(units);
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
        headers.append('Content-Type', 'text/plain');
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
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        
        // return an observable
        console.log(JSON.stringify(unit));
        return this.http.put(this.BASE_SERVICE_URL + 'api/units/' + unit.unitID, JSON.stringify(unit), {
            headers: headers
        })
        .map( (responseData) => {
            console.log(responseData);
            return responseData.json();
        })
        .map((unit: any) => {                                                    
            return unit;
        });
    }
    
    getUnitStatuses(){
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'text/plain');
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
