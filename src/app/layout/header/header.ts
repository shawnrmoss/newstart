import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import './header.scss';

@Component({
  selector: 'header',
  template: require('./header.html'),
  directives: [MATERIAL_DIRECTIVES]
})
export class Header {   
  constructor(
      
  ) {}      
}