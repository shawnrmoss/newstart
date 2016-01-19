
import { Injectable, EventEmitter } from "angular2/core";
import { Http, Headers } from 'angular2/http'

import { Credential } from '../datatypes/credential';

@Injectable()
export class AuthService {
    
    private authenticated: boolean;
    private token:string;
    private expires:any = 0;
    private userInfo:any = {};
    private permissions:any = {};
    
    constructor(private http:Http) {}
    
    public signIn(cred: Credential){       
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'text/plain');
                        
        let body = 'userName=' + cred.email + '&password=' + cred.password + '&grant_type=password';
        
        return this.http.post('http://summitapi.azurewebsites.net/Token', body, {
            headers: headers
        })
        .map(res => {                                    
            localStorage.setItem('jwt', res.json().id_token);    
                            
            //I also want to grab permissions and user info and set as private variables.                                                                                                        
            this.authenticated = true;
        });        
    }
    
    public logout() {
        localStorage.removeItem('jwt');         
    }
        
    public isAuthenticated() {
        return localStorage.getItem('jwt') != null;
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

}

