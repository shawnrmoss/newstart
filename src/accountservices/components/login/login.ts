/*
 * Created with IntelliJ IDEA.
 * User: mfo
 * Date: 12/18/15
 * Time: 9:55 AM
 */
import {Component} from "angular2/core";
import {CookieService} from '../../../app/services/cookie.service';
import {WindowService} from '../../../app/services/window.service';
import {LoginCard} from '../../components/login-card/login-card';

import './login.scss';

@Component({
    selector: 'login',
    directives: [LoginCard],
    pipes: [],
    providers: [],
    template: require('./login.html')
})
export class Login {
    constructor() {        
    } 
}
