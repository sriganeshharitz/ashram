import { Bean } from '../model/bean';
import { AppResponse } from '../../model/app-response';
import { Action } from '@ngrx/store';
import { BeanPhone } from '../model/bean-phone';
import { BeanSBA } from '../model/bean-sba';
import { Relative } from '../model/relative';



export const ATTEMPT_REGISTRATION = 'ATTEMPT_REGISTERATION';
export const REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REDIRECTED_AFTER_REGISTRATION = 'REDIRECT_AFTER_REGISTRATION';
export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export const ATTEMPT_EDIT = 'ATTEMPT_EDIT';
export const EDIT_SUCCESSFUL = 'EDIT_SUCCESSFUL';
export const EDIT_FAILED = 'EDIT_FAILED';

export const ATTEMPT_ADDING_A_RELATIVE = 'ATTEMPT_ADDING_A_RELATIVE';
export const RELATIVE_ADDITION_SUCCESSFUL = 'RELATIVE_ADDITION_SUCCESSFUL';
export const RELATIVE_ADDITION_FAILED = 'RELATIVE_ADDITION_FAILED';

export const RESET_ERROR_MESSAGES = 'RESET_ERROR_MESSAGES';

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
    constructor(public payload: Bean | BeanSBA | BeanPhone) {}
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

export class AttemptEdit implements Action {
    readonly type = ATTEMPT_EDIT;
    constructor(public payload: Bean) {}
}

export class EditSuccessful implements Action {
    readonly type = EDIT_SUCCESSFUL;
    constructor(public payload: AppResponse) {}
}

export class EditFailed implements Action {
    readonly type = EDIT_FAILED;
    constructor(public payload: AppResponse) {}
}

export class ResetErrorMessages implements Action {
    readonly type = RESET_ERROR_MESSAGES;
}

export class AttemptAddingARelative implements Action {
    readonly type = ATTEMPT_ADDING_A_RELATIVE;
    constructor(public payload: Relative) {}
}
export class RelativeAdditionSuccessful implements Action {
    readonly type = RELATIVE_ADDITION_SUCCESSFUL;
    constructor(public payload: AppResponse) {}
}
export class RelativeAdditionFailed implements Action {
    readonly type = RELATIVE_ADDITION_FAILED;
    constructor(public payload: AppResponse) {}
}
export type AuthActions =
Register |
RegistrationSuccess |
RegistrationFailed |
RedirectedAfterRegistration|
AttemptLogin|
LoginSuccessful|
LoginFailed|
Logout|
AttemptEdit|
EditFailed|
EditSuccessful|
ResetErrorMessages|
AttemptAddingARelative|
RelativeAdditionSuccessful|
RelativeAdditionFailed;
