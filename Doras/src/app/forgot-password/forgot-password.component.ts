import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../styles/accounts.css']
})
export class ForgotPasswordComponent implements OnInit {
  newPassword: string;
  oldPassword: string;
  constructor() { }

  ngOnInit() {
    this.newPassword = '';
    this.oldPassword = '';
  }

  print() {
  }

}
