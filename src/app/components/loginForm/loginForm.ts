import { Component } from 'angular2/core';
import { Http } from 'angular2/http';
import { Router } from 'angular2/router';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

import { Credential } from '../../datatypes/credential';
import { AuthService } from '../../services/auth.service';

import './loginForm.scss';

@Component({
  selector: 'login-form',
  template: require('./loginForm.html'),
  directives: [MATERIAL_DIRECTIVES],
  providers: [AuthService]
})
export class LoginForm {    
    public message: string;
    public loading: boolean;
    public credential:  Credential;
    
    constructor(        
        public http: Http,
        public router: Router,
        public auth: AuthService) {   
       
        this.loading = false;
        this.credential = new Credential(null, null);                
    }

    onSubmit() {      
        this.loading = true;
        this.auth.signIn(this.credential)
                 .subscribe(
                     data => {                        
                        this.loading = false;                              
                        this.router.navigate(['HomePage']);                            
                     },
                     err => {        
                        this.loading = false;                                           
                        this.message = 'Your username or password were incorrect.' //Log the error to console       
                        console.log(this.message);             
                     }
                 );                                   
    }    
}
