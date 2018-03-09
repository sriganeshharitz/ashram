import { Component, OnInit } from '@angular/core';
import {RegisterBean} from '../../model/register-bean';
import {DatePipe} from '@angular/common';
import {isDate} from 'ng2-validation/dist/util/lang';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  error;
  registerBean: RegisterBean = new RegisterBean();
  maxDate = new Date();
  startLoading = false;
  constructor(public auth: AuthService) {
  }
  ngOnInit() {
  }
  register() {
    this.startLoading = true;
    this.auth.register({
      fname: this.registerBean.firstName,
      lname: this.registerBean.lastName,
      email: this.registerBean.email,
      password: this.registerBean.password,
      mobileNum: this.registerBean.phone,
      address: ''
    }).subscribe(
      (value) => {
        console.log('registered successfully ' + value);
        this.startLoading = false;
      },
      error2 => {
        this.startLoading = false;
        this.error = error2;
      }
    );
  }
  // isValidDate() {
  //   if (this.registerBean.dateOfBirth) {
  //     return (Date.parse(this.registerBean.dateOfBirth) - Date.now() <= 0);
  //   }
  // }
}
