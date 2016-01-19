import {Component} from "angular2/core";
//Service
import {AuthService} from '../../services/auth.service';

//Components
import {Header} from '../../components/header/header';
import {UnitsContainer} from '../../components/unitsContainer/unitsContainer';

import './units-page.scss';

@Component({
    selector: 'units-page',
    directives: [Header, UnitsContainer],   
    template: require('./units-page.html')
})
export class UnitsPage {
    constructor() {        
    } 
}
