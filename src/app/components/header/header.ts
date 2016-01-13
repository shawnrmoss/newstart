import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';
import './header.scss';

@Component({
  selector: 'header',
  template: require('./header.html'),
  providers: [MATERIAL_PROVIDERS],
  directives: [MATERIAL_DIRECTIVES]
})
export class Header {

  constructor() {}

}
