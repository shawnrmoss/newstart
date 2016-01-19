
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';

@Component({
    selector: 'logoff-page',
    directives: [Header],
    pipes: [],
    template: require('./logoff-page.html')
})
export class LogoffPage {
    constructor() {
        
    }
}
