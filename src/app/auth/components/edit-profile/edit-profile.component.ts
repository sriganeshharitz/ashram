import { RegisterBean } from '../../model/register-bean';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  errorMessage$: Observable<string>;
  registerBean: RegisterBean = new RegisterBean();
  constructor() {
    this.registerBean.firstName = 'Sriganesh';
    this.registerBean.lastName = 'Nagaraj';
    this.registerBean.email = 'sriganesh@gmail.com';
    this.registerBean.phone = '9778778914';
   }

  ngOnInit() {
  }

}
