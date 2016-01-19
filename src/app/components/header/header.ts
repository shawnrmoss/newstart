import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import './header.scss';

@Component({
  selector: 'header',
  template: require('./header.html'),
  providers: [],
  directives: [RouterLink]
})
export class Header {
  constructor() {}
  
  onAdd(){   
    //delete the jwt
    
  }
}
