import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { AuthService } from '../../services/auth.service';

import './header.scss';

@Component({
  selector: 'header',
  template: require('./header.html'),
  providers: [],
  directives: [RouterLink]
})
export class Header {
  constructor(private auth: AuthService,
              private router: Router) {
        console.log(auth.isAuthenticated());          
  }
  
  onLogOff(){   
    this.auth.logout();  
    this.router.navigate(['LoginPage']);    
  }
}
