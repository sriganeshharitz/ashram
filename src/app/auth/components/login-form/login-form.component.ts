import { Bean } from '../../model/bean';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {LoginBean} from '../../model/login-bean';
import {AuthService} from '../../services/auth.service';
import * as fromRoot from '../../../store/reducers';
import * as fromAuthActions from '../../store/auth-actions';
import { Observable } from 'rxjs/Observable';
import { BeanSBA } from '../../model/bean-sba';
import { BeanPhone } from '../../model/bean-phone';

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
      (state: fromRoot.State) => state.auth.loginErrorMessage
    );
   }

  ngOnInit() {
  }
  login() {
    this.store.dispatch(
      new fromAuthActions.AttemptLogin(this.getBean(this.loginBean.email))
    );
  }
  getBean(id: string): Bean | BeanSBA | BeanPhone {
    let bean: Bean | BeanSBA | BeanPhone;
    const expression = /\S+@\S+\.\S+/;
    if (expression.test(id)) {
      bean = new Bean();
      bean.email = id;
      bean.password = this.loginBean.password;
      console.log(bean);
      return bean;
    } else if (id.toUpperCase().startsWith('SBA')) {
      bean = new BeanSBA(id, this.loginBean.password);
      console.log(bean);
      return bean;
    } else {
      bean = new BeanPhone(id, this.loginBean.password);
      console.log(bean);
      return bean;
    }
  }
}
