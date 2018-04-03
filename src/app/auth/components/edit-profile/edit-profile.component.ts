import { RegisterBean } from '../../model/register-bean';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AppUser } from '../../model/app-user';
import * as fromRoot from '../../../store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  errorMessage$: Observable<string>;
  registerBean$: Observable<AppUser>;
  constructor(private store: Store<fromRoot.State>) {
    this.registerBean$ = this.store.select(
      (state: fromRoot.State) => state.auth.user
    );
    
    this.errorMessage$ = this.store.select(
      (state: fromRoot.State) => state.auth.editErrorMessage
    );
  }

  ngOnInit() {
  }
  edit(obj) {
    console.log(obj);
  }
}
