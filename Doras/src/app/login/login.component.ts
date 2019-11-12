import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import * as bcrypt from 'bcryptjs';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../styles/accounts.css']
})
export class LoginComponent implements OnInit {
  newUser: User;
  checkUser: User;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.newUser = new User();
    this.checkUser = new User();
  }
  login() {
    this.data.getUser(this.newUser.username).subscribe(c => {
      this.checkUser = c;
      this.checkPasswordAgainstDb();
    });

  }
  checkPasswordAgainstDb() {
    bcrypt.compare(this.newUser.userPassword, this.checkUser.userPassword).then(res => {
      if (res === true) {
        this.router.navigate(['/home']);
      }
    }).catch(err => console.error(err.message));
  }
}
