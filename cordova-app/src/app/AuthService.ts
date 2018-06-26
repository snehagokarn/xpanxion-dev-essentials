import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import { User } from './user';

@Injectable()
export class AuthService {
  private loggedInUser;

  get isLoggedIn() {
    return this.loggedInUser !=undefined ; // {2}
  }

  get getLoggedInUser() {
    return this.loggedInUser; // {2}
  }

  constructor(
    private router: Router
  ) {}

  login(user){
      this.loggedInUser = user;
      this.router.navigate(['/dashboard']);
  }

  logout() {      
    this.loggedInUser = undefined;                      // {4}
    this.router.navigate(['/login']);
  }
}