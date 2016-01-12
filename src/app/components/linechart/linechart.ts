import {Component} from 'angular2/core';

import 'angular';

@Component({
    selector: 'linechart',
    template: require('./linechart.html'),    
    directives: []
})
export class LineChart {
      
  labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  series = ['Series A', 'Series B'];

  data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  
  constructor(      
  ) {}  
      
}