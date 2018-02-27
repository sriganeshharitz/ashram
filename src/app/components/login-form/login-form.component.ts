import { Component, OnInit } from '@angular/core';
import {LoginBean} from '../../model/login-bean';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginBean: LoginBean = new LoginBean();
  constructor() { }

  ngOnInit() {
  }
  login() {
  }
}
