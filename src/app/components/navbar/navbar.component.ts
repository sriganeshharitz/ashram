import { Store } from '@ngrx/store';
import { AppUser } from '../../auth/model/app-user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../store/reducers';
import * as fromAuthActions from '../../auth/store/auth-actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<AppUser>;
  constructor(private store: Store<fromRoot.State>) {
    this.user$ = this.store.select(
      (state: fromRoot.State) => state.auth.user
    );
   }
  ngOnInit() {
  }
  logout() {
    this.store.dispatch(new fromAuthActions.Logout());
  }

}
