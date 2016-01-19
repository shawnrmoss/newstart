
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';

@Component({
    selector: 'drivers-page',
    directives: [Header],
    pipes: [],
    template: require('./drivers-page.html')
})
export class DriversPage {
    constructor() {
        
    }
}
