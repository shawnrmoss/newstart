
import {Component} from "angular2/core";
import {CanActivate, RouteData} from 'angular2/router';
import {isLoggedIn} from '../../../accountservices/isLoggedIn';
import {Header} from './../header/header';
                     
@Component({
    selector: 'home',
    directives: [Header],
    pipes: [],
    template: require('./home.html')
})
@CanActivate(isLoggedIn)
export class Home {
    constructor() {
        
    }
}
