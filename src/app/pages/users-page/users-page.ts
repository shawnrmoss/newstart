
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';

@Component({
    selector: 'users-page',
    directives: [Header],
    pipes: [],
    template: require('./users-page.html')
})
export class UsersPage {
    constructor() {
        
    }
}
