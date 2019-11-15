import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private data: DataService, private router: Router) {
    this.reloadUser();
  }

  reloadUser() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(theUser: User) {
    localStorage.setItem('currentUser', JSON.stringify(theUser));
    this.currentUserSubject.next(theUser);
    this.checkTokenIsNotExpired();
    this.router.navigate(['/main']);
  }

  ifLoggedIn() {
    if (this.currentUserValue) {
      this.logout();
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken() {
    let user = new User();
    new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser'))).asObservable().subscribe(c => {
      user = c;
    });
    if (user) {
      return user.token;
    } else {
      return null;
    }
  }
  checkTokenIsNotExpired() {
    this.data.authenticate(this.getToken());
    // if (Date.now() >= exp * 1000) {
    //   return false;
    // }
  }

  isAdmin() {
    return this.currentUserValue.isAdmin === 1 ? true : false;
  }
}
