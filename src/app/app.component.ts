import { ElementRef } from '@angular/core';
import { AppUser } from './auth/model/app-user';
import { Store } from '@ngrx/store';
import {Component} from '@angular/core';
import * as fromRoot from './store/reducers';
import { Observable } from 'rxjs/Observable';
import * as fromAuthActions from './auth/store/auth-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user$: Observable<AppUser>;
  selected: HTMLAnchorElement;
  constructor(private store: Store<fromRoot.State>) {
    this.user$ = this.store.select(
      (state: fromRoot.State) => state.auth.user
    );
  }
  logout() {
    this.store.dispatch(new fromAuthActions.Logout());
  }

  addActiveClass(selectedLink: HTMLAnchorElement) {
    if (this.selected) {
      this.selected.classList.remove('active');
    }
    this.selected = selectedLink;
    selectedLink.classList.add('active');
  }
}

