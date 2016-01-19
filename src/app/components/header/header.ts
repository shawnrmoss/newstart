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
  public loggedInUsername: string;
    
  constructor(private auth: AuthService,
              private router: Router) {
                  
     this.loggedInUsername = auth.getUsername();             
  }
  
  onLogOff(){   
    this.auth.logout();  
    this.router.navigate(['LoginPage']);    
  }
}
