
import {Component} from "angular2/core";
import {Header} from '../../components/header/header';

@Component({
    selector: 'about-page',
    directives: [Header],
    pipes: [],
    template: require('./about-page.html')
})
export class AboutPage {
    constructor() {
        
    }
}
