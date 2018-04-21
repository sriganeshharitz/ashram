import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../../store/reducers';
import * as fromAuthActions from '../../../auth/store/auth-actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { AppUser } from '../../../auth/model/app-user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, OnDestroy {
  errorMessage$: Observable<string>;
  registerBean$: Observable<AppUser>;
  registerBean: AppUser;
  startLoading$: Observable<boolean>;
  subscription: Subscription;
  constructor(private store: Store<fromRoot.State>) {
    this.registerBean$ = this.store.select(fromRoot.selectUser);
    this.errorMessage$ = this.store.select(fromRoot.selectEditErrorMessage);
    this.startLoading$ = this.store.select(fromRoot.selectStartLoading);
  }

  ngOnInit() {
    this.subscription = this.registerBean$.subscribe(
      (value: AppUser) => {
        this.registerBean = value;
      }
    );
  }
  edit(bean) {
    console.log(bean);
    this.store.dispatch(new fromAuthActions.AttemptEdit({
      ...bean,
      gender: bean['gender'] === 'male' ? 1 : 0,
      dob: new Date(bean.dob).getMilliseconds(),
      address: 'aaa',
      id: bean.id.replace('sba', ''),
      active: true,
      sbaId: bean.id,
      relativeList: this.registerBean.relatives
    }));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
