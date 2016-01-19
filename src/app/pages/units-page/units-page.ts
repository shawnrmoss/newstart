import {Component} from "angular2/core";
//Service
import {AuthService} from '../../services/auth.service';

//Components
import {Header} from '../../components/header/header';
import {Sidebar} from '../../components/sidebar/sidebar';
import {Units} from '../../components/unitsContainer/unitsContainer';

import './units-page.scss';

@Component({
    selector: 'units-page',
    directives: [Header, Sidebar, Units],   
    template: require('./units-page.html')
})
export class UnitsPage {
    constructor() {        
    } 
}
