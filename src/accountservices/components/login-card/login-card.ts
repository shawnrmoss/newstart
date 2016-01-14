import {Component} from 'angular2/core';

import {LoginForm} from '../login-form/login-form';
import './login-card.scss';

@Component({
  selector: 'login-card',
  template: require('./login-card.html'),
  directives: [LoginForm],
  providers: []
})
export class LoginCard {    
    constructor() 
    {                   
    }
}
