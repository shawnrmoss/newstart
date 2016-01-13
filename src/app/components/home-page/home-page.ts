
import {Component} from "angular2/core";
import {Header} from './../header/header';

@Component({
    selector: 'home-page',
    directives: [Header],
    pipes: [],
    template: require('./home-page.html')
})
export class HomePage {
    constructor() {
        
    }
}
