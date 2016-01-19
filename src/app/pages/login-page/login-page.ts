/*
 * Created with IntelliJ IDEA.
 * User: mfo
 * Date: 12/18/15
 * Time: 9:55 AM
 */
import {Component} from "angular2/core";
import {AuthService} from '../../services/auth.service';
import {LoginCard} from '../../components/logincard/logincard';

import './login-page.scss';

@Component({
    selector: 'login',
    directives: [LoginCard],
    pipes: [],
    providers: [],
    template: require('./login-page.html')
})
export class LoginPage {
    constructor() {        
    } 
}
