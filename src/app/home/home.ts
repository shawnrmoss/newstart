import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES,MATERIAL_PROVIDERS} from 'ng2-material/all';
import {ListBasicUsage} from '../common/list/list';
import './home.scss';

@Component({
  selector: 'home',
  template: require('./home.html'),
  providers: [MATERIAL_PROVIDERS],
  directives: [MATERIAL_DIRECTIVES, ListBasicUsage]
})
export class Home {   
  constructor(
      
  ) {}      
}