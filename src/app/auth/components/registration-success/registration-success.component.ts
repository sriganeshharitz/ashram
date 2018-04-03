import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../../store/reducers';
import * as fromAuthActions from '../../store/auth-actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.css']
})
export class RegistrationSuccessComponent implements OnInit {
  sbaId$: Observable<string>;
  constructor(private store: Store<fromRoot.State>) {
    this.sbaId$ = this.store.select(
      (state: fromRoot.State) => state.auth.sbaId
    );
  }

  ngOnInit() {
    // this.store.dispatch(new fromAuthActions.RedirectedAfterRegistration());
  }

}
