import { Component } from "angular2/core";
import { RouterLink } from 'angular2/router';

//Service
import {AuthService} from '../../services/auth.service';

//Components
import {Header} from '../../components/header/header';
import {UnitsContainer} from '../../components/unitsContainer/unitsContainer';

import './units-page.scss';

@Component({
    selector: 'units-page',
    directives: [Header, UnitsContainer, RouterLink],   
    template: require('./units-page.html')
})
export class UnitsPage {
    constructor() {        
    } 
}
