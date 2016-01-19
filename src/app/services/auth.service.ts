
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
            localStorage.setItem('jwt', res.json().access_token);            
            localStorage.setItem('expires', res.json()['.expires']); 
            localStorage.setItem('userName', res.json().userName);                                                                                                                                             
        });        
    }
    
    public logout() {
        localStorage.removeItem('jwt');  
        localStorage.removeItem('expires');  
        localStorage.removeItem('userName');                         
    }
        
    public isAuthenticated() {
        return localStorage.getItem('jwt') != null;
    }
    
    public getUsername() {
        return localStorage.getItem('userName');
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

}

