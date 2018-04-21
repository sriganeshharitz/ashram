import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../../store/reducers';
import { AppUser } from '../../../auth/model/app-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$: Observable<AppUser>;
  constructor(private store: Store<fromRoot.State>) {
    this.user$ = this.store.select(
      (state: fromRoot.State) => state.auth.user
    );
  }

  ngOnInit() {
  }

}
