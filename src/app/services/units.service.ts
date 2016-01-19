import { Http, Headers } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Unit } from '../datatypes/unit';
 
@Injectable()
export class UnitService {
    
    private jwt: string;
    private decodedJwt: string;
  
    constructor(public http: Http){
        console.log('Unit Service created.', http);
        
        this.jwt = localStorage.getItem('jwt');
        
        // We also store the decoded JSON from this JWT
        //this.decodedJwt = this.jwt && jwt_decode(this.jwt);
    }    
       
    getUnits() { 
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        
        // return an observable
        return this.http.get('http://summitapi.azurewebsites.net/api/units', {
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
    
    getUnit(id: number){
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        
        // return an observable
        return this.http.get('http://summitapi.azurewebsites.net/api/units/' + id, {
            headers: headers
        })
        .map( (responseData) => {
            return responseData.json();
        })
        .map((unit: Unit) => {
            
            console.log(unit);
            
            return unit;
        });
    }
        
}
