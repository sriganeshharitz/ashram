import { Bean } from '../model/bean';
import { AppResponse } from '../../model/app-response';
import { Action } from '@ngrx/store';



export const ATTEMPT_REGISTRATION = 'ATTEMPT_REGISTERATION';
export const REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REDIRECTED_AFTER_REGISTRATION = 'REDIRECT_AFTER_REGISTRATION';
export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export class Register implements Action {
    readonly type = ATTEMPT_REGISTRATION;
    constructor(public payload: Bean) {
    }
}

export class RegistrationSuccess implements Action {
    readonly type = REGISTRATION_SUCCESSFUL;
    constructor(public payload: AppResponse) {}
}

export class RegistrationFailed implements Action {
    readonly type = REGISTRATION_FAILED;
    constructor(public payload: AppResponse) {}
}

export class RedirectedAfterRegistration implements Action {
    readonly type = REDIRECTED_AFTER_REGISTRATION;
    constructor(public payload?: AppResponse) {}
}

export class AttemptLogin implements Action {
    readonly type = ATTEMPT_LOGIN;
    constructor(public payload: Bean) {}
}

export class LoginSuccessful implements Action {
    readonly type = LOGIN_SUCCESSFUL;
    constructor(public payload: AppResponse) {}
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;
    constructor(public payload: AppResponse) {}
}

export class Logout implements Action {
    readonly type = LOGOUT;
}
export type AuthActions =
Register |
RegistrationSuccess |
RegistrationFailed |
RedirectedAfterRegistration|
AttemptLogin|
LoginSuccessful|
LoginFailed|
Logout;
