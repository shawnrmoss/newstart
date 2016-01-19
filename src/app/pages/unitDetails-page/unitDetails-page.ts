
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';
//import {UnitForm} from '../../components/unitForm/unitForm';
import {UnitDetail} from '../../components/unitDetail/unitDetail';

@Component({
    selector: 'unit-details-page',
    directives: [Header, UnitDetail],
    pipes: [],
    template: require('./unitDetails-page.html')
})
export class UnitDetailsPage {
    constructor() {
        
    }
}
