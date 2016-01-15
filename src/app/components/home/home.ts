
import {Component} from "angular2/core";
import {Header} from './../header/header';

@Component({
    selector: 'home',
    directives: [Header],
    pipes: [],
    template: require('./home.html')
})
export class Home {
    constructor() {
        
    }
}
