import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import * as bcrypt from 'bcryptjs';
import { DataService } from '../data.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../styles/accounts.css']
})
export class LoginComponent implements OnInit {
  newUser: User;
  checkUser: User;
  constructor(
    private data: DataService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.authenticationService.ifLoggedIn();
    this.newUser = new User();
    this.checkUser = new User();
  }

  onSubmit() {
    this.data.getUser(this.newUser.username).subscribe(c => {
      this.checkUser = c;
      this.checkPasswordAgainstDb();
    });
  }

  checkPasswordAgainstDb() {
    this.data.login(this.checkUser.username, this.newUser.userPassword).subscribe(c => {
      const u = 'user';
      this.authenticationService.login(c[u]);
    });
  }
}
