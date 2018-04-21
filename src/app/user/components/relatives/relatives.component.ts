import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../../store/reducers';
import * as fromAuthActions from '../../../auth/store/auth-actions';
import { Store } from '@ngrx/store';
import { RegisterBean } from '../../../auth/model/register-bean';
import { AppUser } from '../../../auth/model/app-user';

@Component({
  selector: 'app-relatives',
  templateUrl: './relatives.component.html',
  styleUrls: ['./relatives.component.css']
})
export class RelativesComponent implements OnInit {
  user$: Observable<AppUser>;
  errorMessage$: Observable<string>;
  successMessage$: Observable<string>;
  registerBean: RegisterBean = new RegisterBean();
  startLoading$: Observable<boolean>;
  maxDate = new Date();
  constructor(private store: Store<fromRoot.State>) {
    this.user$ = this.store.select(fromRoot.selectUser);
    this.errorMessage$ = this.store.select(fromRoot.selectAddRekativeErrorMessage);
    this.successMessage$ = this.store.select(fromRoot.selectAddRekativeSuccessMessage);
    this.startLoading$ = this.store.select(fromRoot.selectStartLoading);
   }

  ngOnInit() {
  }
  add(relative) {
    this.store.dispatch(new fromAuthActions.AttemptAddingARelative({
      ...relative,
      gender: relative['gender'] === 'male' ? 1 : 0,
      dob: relative['dob'].getTime()
    }));
  }
}
