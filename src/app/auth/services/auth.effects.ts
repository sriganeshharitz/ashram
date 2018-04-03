import { Router } from '@angular/router';
import { AppResponse } from '../../model/app-response';
import { Bean } from '../model/bean';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, map, mergeMap, tap, concatMap } from 'rxjs/operators';
import * as fromAuthActions from '../store/auth-actions';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { HttpResponse } from '@angular/common/http';



@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private router: Router) {
    }
    @Effect()
    register$: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.ATTEMPT_REGISTRATION),
        map((action: fromAuthActions.Register) => action.payload),
        concatMap((bean: Bean) => this.authService.register(bean).pipe(
            map((response: AppResponse) => {
                if (response.status === 0) {
                    return new fromAuthActions.RegistrationSuccess(response);
                } else {
                    console.log('blah');
                    return new fromAuthActions.RegistrationFailed(response);
                }
            }
            ),
            catchError(err => of(new fromAuthActions.RegistrationFailed({message: 'Oops something happened! Please try again.'})))
        ))
    );

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.ATTEMPT_LOGIN),
        map((action: fromAuthActions.AttemptLogin) => action.payload),
        concatMap((bean: Bean) => this.authService.login(bean).pipe(
            map((response: HttpResponse<AppResponse>) => {
                if (response.body.status === 0) {
                    localStorage.setItem('token', response.body.message);
                    return new fromAuthActions.LoginSuccessful(response.body);
                } else { 
                    console.log('login failed ' + response.body.message + response.headers.keys());
                    return new fromAuthActions.LoginFailed(response.body);
                }
            }),
            catchError((err) => of(new fromAuthActions.LoginFailed({message: 'Oops something happened! Please try again'})))
        ))
    );

    @Effect({dispatch: false})
    registrationSuccessful: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.REGISTRATION_SUCCESSFUL),
        tap(success => this.router.navigateByUrl('/registration-success'))
    );

    @Effect({ dispatch: false })
    loginSuccessful: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.LOGIN_SUCCESSFUL),
        tap(success => this.router.navigateByUrl('/home'))
    );

    @Effect({ dispatch: false })
    logout: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.LOGOUT),
        tap(success => this.router.navigateByUrl('/logout'))
    );
}

