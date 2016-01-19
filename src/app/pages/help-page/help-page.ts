
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';

@Component({
    selector: 'help-page',
    directives: [Header],
    pipes: [],
    template: require('./help-page.html')
})
export class HelpPage {
    constructor() {
        
    }
}
