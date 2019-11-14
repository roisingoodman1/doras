import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  canActivate() {
    const currentUser = this.authenticationService.currentUserValue;
    if (!currentUser) {
      this.authenticationService.logout();
      return false;
    }
    if (currentUser.token === this.authenticationService.getToken()) {
      return true;
    } else {
      this.authenticationService.logout();
      return false;
    }
  }
}
