import { Component, OnInit } from '@angular/core';
import {LoginBean} from '../../model/login-bean';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginBean: LoginBean = new LoginBean();
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.auth.login({
      fname: '',
      lname: '',
      email: this.loginBean.email,
      password: this.loginBean.password,
      mobileNum: '',
      address: ''
    }).subscribe(
      (value) => {
        console.log(value);
      }
    );
  }
}
