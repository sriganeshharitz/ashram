import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
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
import { AppUser } from '../model/app-user';
import { Relative } from '../model/relative';



@Injectable()
export class AuthEffects {
    snapshot: ActivatedRouteSnapshot;
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
            this.snapshot = this.route.snapshot;
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
                    return new fromAuthActions.RegistrationFailed(response);
                }
            }
            ),
            catchError(err => {
                console.log(err);
                return of(new fromAuthActions.RegistrationFailed({message: 'Oops something happened! Please try again.'}));
            })
        ))
    );

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.ATTEMPT_LOGIN),
        map((action: fromAuthActions.AttemptLogin) => action.payload),
        concatMap((bean: Bean) => this.authService.login(bean).pipe(
            map((response: HttpResponse<AppResponse>) => {
                if (response.body.status === 0) {
                    localStorage.setItem('token', response.body.message.split(' ')[1]);
                    const userBean = response.body.data;
                    const user = new AppUser(
                        userBean.email,
                        userBean.fname,
                        userBean.lname,
                        userBean.sbaId,
                        userBean.address,
                        userBean.mobileNum,
                        userBean.relativeList,
                        userBean.gender === 1 ? 'male' : 'female',
                        new Date(userBean.dob));
                    localStorage.setItem('user', JSON.stringify(user));
                    return new fromAuthActions.LoginSuccessful(response.body);
                } else {
                    console.log('login failed ' + response.body.message + response.headers.keys());
                    return new fromAuthActions.LoginFailed(response.body);
                }
            }),
            catchError((err) => of(new fromAuthActions.LoginFailed({message: 'Oops something happened! Please try again'})))
        ))
    );

    @Effect()
    addRelative$: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.ATTEMPT_ADDING_A_RELATIVE),
        map((action: fromAuthActions.AttemptAddingARelative) => action.payload),
        concatMap((bean: Relative) => this.authService.addRelative(bean).pipe(
            map((response: AppResponse) => {
                if (response.status === 0 || response.status === 200) {
                    return new fromAuthActions.RelativeAdditionSuccessful(response);
                } else {
                    return new fromAuthActions.RelativeAdditionFailed(response);
                }
            }
            ),
            catchError(err => of(new fromAuthActions.RelativeAdditionFailed({message: 'Oops something happened! Please try again.'})))
        ))
    );

    @Effect()
    editProfile$: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.ATTEMPT_EDIT),
        map((action: fromAuthActions.AttemptEdit) => action.payload),
        concatMap((bean: Bean) => this.authService.edit(bean).pipe(
            map((response: AppResponse) => {
                if (response.status === 0 || response.status === 200) {
                    return new fromAuthActions.EditSuccessful(response);
                } else {
                    return new fromAuthActions.EditFailed(response);
                }
            }
            ),
            catchError(err => of(new fromAuthActions.EditFailed({message: 'Oops something happened! Please try again.'})))
        ))
    );

    @Effect({dispatch: false})
    registrationSuccessful$: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.REGISTRATION_SUCCESSFUL),
        tap(success => this.router.navigateByUrl('/registration-success'))
    );

    @Effect({dispatch: false})
    editProfileSuccessful$: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.EDIT_SUCCESSFUL),
        tap((success: fromAuthActions.EditSuccessful) => {
            const userBean = success.payload.data;
                    const user = new AppUser(
                        userBean.email,
                        userBean.fname,
                        userBean.lname,
                        userBean.sbaId,
                        userBean.address,
                        userBean.mobileNum,
                        userBean.relativeList,
                        userBean.gender === 1 ? 'male' : 'female',
                        new Date(userBean.dob));
                    localStorage.setItem('user', JSON.stringify(user));
            return this.router.navigateByUrl('/user/edit-success');
        })
    );
    @Effect({dispatch: false})
    addRelativeSuccessful$: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.RELATIVE_ADDITION_SUCCESSFUL),
        tap((success: fromAuthActions.RelativeAdditionSuccessful) => {
            const userBean = success.payload.data;
                    const user = new AppUser(
                        userBean.email,
                        userBean.fname,
                        userBean.lname,
                        userBean.sbaId,
                        userBean.address,
                        userBean.mobileNum,
                        userBean.relativeList,
                        userBean.gender === 1 ? 'male' : 'female',
                        new Date(userBean.dob));
                    localStorage.setItem('user', JSON.stringify(user));
        })
    );

    @Effect({ dispatch: false })
    loginSuccessful: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.LOGIN_SUCCESSFUL),
        tap(success => {
            const returnUrl = this.snapshot.queryParamMap.get('returnUrl');
            returnUrl ? this.router.navigateByUrl(returnUrl) : this.router.navigateByUrl('/user/dashboard');
        })
    );
    @Effect({ dispatch: false })
    logout: Observable<Action> = this.actions$.pipe(
        ofType(fromAuthActions.LOGOUT),
        tap((success) => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.router.navigateByUrl('/logout');
        })
    );
}

