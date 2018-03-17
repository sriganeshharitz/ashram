import { Bean } from '../../model/bean';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {LoginBean} from '../../model/login-bean';
import {AuthService} from '../../services/auth.service';
import * as fromRoot from '../../../store/reducers';
import * as fromAuthActions from '../../store/auth-actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginBean: LoginBean = new LoginBean();
  startLoading$: Observable<boolean>;
  errorMessage$: Observable<string>;
  constructor(private store: Store<fromRoot.State>) {
    this.startLoading$ = this.store.select(
      (state: fromRoot.State) => state.auth.startLoading
    );
    this.errorMessage$ = this.store.select(
      (state: fromRoot.State) => state.auth.errorMessage
    );
   }

  ngOnInit() {
  }
  login() {
    this.store.dispatch(
      new fromAuthActions.AttemptLogin(new Bean(this.loginBean.email, this.loginBean.password))
    );
  }
  // login() {
  //   this.auth.login({
  //     fname: '',
  //     lname: '',
  //     email: this.loginBean.email,
  //     password: this.loginBean.password,
  //     mobileNum: '',
  //     address: ''
  //   }).subscribe(
  //     (value) => {
  //       console.log(value);
  //     }
  //   );
  // }
}
