/*
 * Created with IntelliJ IDEA.
 * User: mfo
 * Date: 12/18/15
 * Time: 9:55 AM
 */
import {Component} from "angular2/core";
import {CookieService} from '../../../app/services/cookie.service';
import {WindowService} from '../../../app/services/window.service';
import {AuthService} from '../../services/auth.service';
import {LoginCard} from '../../components/login-card/login-card';

@Component({
    selector: 'public-page',
    directives: [LoginCard],
    pipes: [],
    providers: [],
    template: require('./login-page.html')
})
export class LoginPage {
    constructor(private  cookies:CookieService, private authService:AuthService) {
        //console.log("Public instantiated");
    }

    get idCookie() {
        return this.cookies.getCookie('id');
    }

    get authenticated() {
        return this.authService.isAuthenticated();
    }
}
