import {Component} from "angular2/core";
import {Header} from '../../components/header/header';
import {Sidebar} from '../../components/sidebar/sidebar';

import './home-page.scss';
@Component({
    selector: 'home-page',
    directives: [Header, Sidebar],
    pipes: [],
    template: require('./home-page.html')
})
export class HomePage {
    constructor() {
        
    }
}
