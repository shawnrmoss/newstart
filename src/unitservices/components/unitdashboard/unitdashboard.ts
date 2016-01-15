import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {isLoggedIn} from '../../../accountservices/isLoggedIn';

@Component({
  selector: 'unit-dashboard',
  template: require('./unitdashboard.html'),  
})
export class UnitDashboard {}