import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../../store/reducers';
import * as fromAuthActions from '../../store/auth-actions';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.css']
})
export class RegistrationSuccessComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) {
   }

  ngOnInit() {
    // this.store.dispatch(new fromAuthActions.RedirectedAfterRegistration());
  }

}
