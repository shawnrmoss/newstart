/*
 * Created with IntelliJ IDEA.
 * User: mfo
 * Date: 12/18/15
 * Time: 9:55 AM
 */
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';
import {Units} from '../../components/unitsContainer/unitsContainer';
import {AuthService} from '../../services/auth.service';

import './units-page.scss';

@Component({
    selector: 'units-page',
    directives: [Header, Units],   
    template: require('./units-page.html')
})
export class UnitsPage {
    constructor() {        
    } 
}
