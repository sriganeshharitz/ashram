import { Component, OnInit } from '@angular/core';
import {RegisterBean} from '../../model/register-bean';
import {DatePipe} from '@angular/common';
import {isDate} from 'ng2-validation/dist/util/lang';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerBean: RegisterBean = new RegisterBean();
  constructor() {
  }
  ngOnInit() {
  }
  register() {
  }
  isValidDate() {
    if (this.registerBean.dateOfBirth) {
      return (Date.parse(this.registerBean.dateOfBirth) - Date.now() <= 0);
    }
  }
}
