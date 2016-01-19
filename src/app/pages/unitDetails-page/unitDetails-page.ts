
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';
import {UnitDetails} from '../../components/unitDetail/unitDetail';

@Component({
    selector: 'unit-details-page',
    directives: [Header],
    pipes: [],
    template: require('./unitDetails-page.html')
})
export class UnitDetailsPage {
    constructor() {
        
    }
}
