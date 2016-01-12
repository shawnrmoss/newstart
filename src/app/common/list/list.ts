import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {RouterLink} from 'angular2/router';

let imagePath = 'public/images/avatars/avatar11.svg';



@Component({
    selector: 'list-basic-usage',
    template: require('./list.html'),    
    directives: [MATERIAL_DIRECTIVES, RouterLink]
})
export class ListBasicUsage {
  constructor(      
  ) {}  
  
  links = [
    {linktext: 'Overview', routename: 'Unit Dashboard', styles: 'fa fa-bar-chart'},
    {linktext: 'Units', routename: 'Units', styles: 'fa fa-list-alt'},
    {linktext: 'Plates', routename: 'Unit Dashboard', styles: 'fa fa-barcode'},
    {linktext: 'Locations', routename: 'Units', styles: 'fa fa-barcode'},
  ];
  
}