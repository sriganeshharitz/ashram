import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      const returnUrl = state.url;
      this.router.navigate(['login'], {queryParams: {returnUrl: returnUrl}});
      return false;
    }
  }
  constructor(private auth: AuthService, private router: Router) { }

}
