
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';

@Component({
    selector: 'mileage-page',
    directives: [Header],
    pipes: [],
    template: require('./mileage-page.html')
})
export class MileagePage {
    constructor() {
        
    }
}
