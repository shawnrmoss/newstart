
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';

@Component({
    selector: 'settings-page',
    directives: [Header],
    pipes: [],
    template: require('./settings-page.html')
})
export class SettingsPage {
    constructor() {
        
    }
}
