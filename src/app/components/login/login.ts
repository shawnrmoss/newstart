import {Component} from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';
import { Router } from 'angular2/router';
import { MdPatternValidator, MdMinValueValidator, MdNumberRequiredValidator, MdMaxValueValidator, MATERIAL_DIRECTIVES} from 'ng2-material/all';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup} from 'angular2/common';

import {RequestOptions, RequestMethod} from 'angular2/http';


import './login.scss';

@Component({
  selector: 'login',
  template: require('./login.html'),  
  directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES], 
  providers: [HTTP_PROVIDERS]
})
export class Login {   
    loginForm: ControlGroup;
    credentials = {
        customerName: '',
        email: '',
        password: ''        
    };
    constructor(
        fb: FormBuilder,
        public http: Http,
        public router: Router ) {        
            this.loginForm = fb.group({        
            'customerName': ['', Validators.compose([
                Validators.required,
                Validators.maxLength(50)
            ])],
            'email': ['', Validators.compose([
                MdPatternValidator.inline('^.+@.+\..+$'),
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(100)
            ])],        
            'password': ['', Validators.compose([
                //MdPatternValidator.inline('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$'),
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(100)
            ])]
        });
    }
    
    onSubmit(data: string) {                                               
        var creds = "userName=" + data["email"] + "&password=" + data["password"] + "&grant_type=password";
        
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'text/plain');                
        
        //Call web api for a jwt token
        this.http.post('http://summitapi.azurewebsites.net/Token', creds, {
                headers: headers
            })
            .subscribe(
                data => {
                    //Store the jwt
                    this.saveJwt(data.json());
                    
                    //Add router and redirect to authenticated app                    
                    this.router.navigate(['Authenticated']);
                },
                err => this.logError(err.json().message),
                () => console.log('Authentication Complete')
            );    
    }
    
    logError(err) {
        console.error('There was an error: ' + err);
    }
    
    saveJwt(jwt) {
        console.log(jwt);
        if(jwt) {
            localStorage.setItem('summitJWT', jwt)
        }
    }
}
