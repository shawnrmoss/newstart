
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';

@Component({
    selector: 'home',
    directives: [Header],
    pipes: [],
    template: require('./home-page.html')
})
export class HomePage {
    constructor() {
        
    }
}
