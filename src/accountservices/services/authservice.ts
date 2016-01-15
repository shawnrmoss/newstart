import {Observable} from 'rxjs/Observable';

export class AuthService {
  public loggedIn: boolean;
  
  constructor() {
    this.loggedIn = false;
  }
  
  login() {
      this.loggedIn = true;
  }
  
  logout() {
    this.loggedIn = false;
  }
  
  check() {
    // return an observable of the logged in value
    return Observable.of(this.loggedIn);
  }  
}