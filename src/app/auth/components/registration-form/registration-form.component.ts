import { Router } from '@angular/router';
import { Bean } from '../../model/bean';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterBean } from '../../model/register-bean';
import { DatePipe } from '@angular/common';
import { isDate } from 'ng2-validation/dist/util/lang';
import { AuthService } from '../../services/auth.service';
import * as fromRoot from '../../../store/reducers';
import * as fromAuthActions from '../../store/auth-actions';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { NgModel } from '@angular/forms/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnDestroy{
  errorMessage$: Observable<string>;
  registeredSuccessfullySubscription: Subscription;
  registerBean: RegisterBean = new RegisterBean();
  maxDate = new Date();
  startLoading$: Observable<boolean>;
  constructor(private auth: AuthService, private store: Store<fromRoot.State>, private router: Router) {
    this.errorMessage$ = this.store.select(
      (state: fromRoot.State) => state.auth.registerErrorMessage
    );
    this.startLoading$ = this.store.select(
      (state: fromRoot.State) => state.auth.startLoading
    );
  }
  register() {
    console.log('inside register ' + this.registerBean.dateOfBirth.getTime());
    this.store.dispatch(
      new fromAuthActions.Register(
        new Bean(
          this.registerBean.firstName,
          this.registerBean.lastName,
          this.registerBean.email,
          this.registerBean.password,
          this.registerBean.phone,
          'blah',
          this.registerBean.gender==='male'? 1 : 0,
          this.registerBean.dateOfBirth.getMilliseconds())));
  }

  ngOnDestroy(): void {
    this.store.dispatch(new fromAuthActions.ResetErrorMessages());
  }
}
