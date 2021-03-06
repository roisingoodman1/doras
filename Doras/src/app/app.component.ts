import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private authenticationService: AuthenticationService
  ) {}
  logout() {
    this.authenticationService.logout();
  }

  isAdmin() {
    this.authenticationService.isAdmin();
  }
}
