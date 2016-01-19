
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';

@Component({
    selector: 'locations-page',
    directives: [Header],
    pipes: [],
    template: require('./locations-page.html')
})
export class LocationsPage {
    constructor() {
        
    }
}
