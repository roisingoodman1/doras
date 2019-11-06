import { Component, OnInit, ɵConsole } from '@angular/core';
import bcrypt from 'bcryptjs';
import { User } from './user';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  newUser: User;


  constructor() { }

  ngOnInit() {
    this.newUser = new User();
  }
  // genRandomString(length){
  //     return crypto.randomBytes(Math.ceil(length/2))
  //             .toString('hex')
  //             .slice(0,length);
  // };
  //
  // sha512(password, salt){
  //     const hash = crypto.createHmac('sha512', salt);
  //     hash.update( password );
  //     const value = hash.digest('hex');
  //     return {
  //         salt:salt,
  //         passwordHash:value
  //     };
  // };
  //
  // saltHashPassword(userpassword){
  //     const salt = this.genRandomString(16);
  //     const passwordData = this.sha512(userpassword, salt);
  //     //console.log('UserPassword = ' + userpassword);
  //     //console.log('Passwordhash = ' + passwordData.passwordHash);
  //     //console.log('nSalt = ' + passwordData.salt);
  //     console.log(passwordData);
  // };

  encryptPassword() {
    const salt = bcrypt.genSaltSync(10)
    bcrypt.hash(this.newUser.password, salt, (err, hash) => {
      console.log(hash)
      console.log(salt)
      console.log('Password has been processed')
      this.decryptPassword(hash)
    })
  }
  
  decryptPassword(hash) {
    bcrypt.compare(this.newUser.password, hash).then(res=>{
      console.log(res)
    }).catch(err => console.error(err.message))
  }
}