import {Component} from 'angular2/core';

import {LoginForm} from '../loginForm/loginForm';
import './loginCard.scss';

@Component({
  selector: 'login-card',
  template: require('./loginCard.html'),
  directives: [LoginForm],
  providers: []
})
export class LoginCard {    
    constructor() 
    {                   
    }
}
