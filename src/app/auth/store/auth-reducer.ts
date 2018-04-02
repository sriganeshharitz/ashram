import { AppUser } from '../model/app-user';
import * as fromAuthActions from './auth-actions';
export interface State {
    user: AppUser;
    loginErrorMessage: string;
    registerErrorMessage: string;
    editErrorMessage: string;
    startLoading: boolean;
}

const initialState: State = {
    user: null,
    loginErrorMessage: null,
    registerErrorMessage: null,
    editErrorMessage: null,
    startLoading: false
};

export function authReducer(state: State = initialState, action: fromAuthActions.AuthActions): State {
    switch (action.type) {
        case fromAuthActions.ATTEMPT_REGISTRATION: {
            return {
                ...state,
                startLoading: true
            };
        }
        case fromAuthActions.REGISTRATION_SUCCESSFUL: {
            return {
                ...state,
                startLoading: false,
                registerErrorMessage: null
            };
        }
        case fromAuthActions.REGISTRATION_FAILED: {
            console.log('err msg in reducer is ' + action.payload.message);
            return {
                ...state,
                registerErrorMessage: action.payload.message,
                startLoading: false
            };
        }
        case fromAuthActions.REDIRECTED_AFTER_REGISTRATION: {
            return {
                ...state,
                startLoading: false,
                registerErrorMessage: null
            };
        }
        case fromAuthActions.ATTEMPT_LOGIN: {
            return {
                ...state,
                startLoading: true
            };
        }
        case fromAuthActions.LOGIN_SUCCESSFUL: {
            return {
                ...state,
                startLoading: false,
                loginErrorMessage: null,
                user: new AppUser(action.payload.data.email, action.payload.data.fname, action.payload.data.lname)
            };
        }
        case fromAuthActions.LOGIN_FAILED: {
            return {
                ...state,
                startLoading: false,
                loginErrorMessage: action.payload.message
            };
        }
        case fromAuthActions.LOGOUT: {
            return {
                ...state,
                user: null
            };
        }
        case fromAuthActions.ATTEMPT_EDIT: {
            return {
                ...state,
                startLoading: true
            };
        }
        case fromAuthActions.EDIT_SUCCESSFUL: {
            return {
                ...state,
                startLoading: false,
                editErrorMessage: null
            };
        }
        case fromAuthActions.EDIT_FAILED: {
            return {
                ...state,
                startLoading: false,
                editErrorMessage: action.payload.message
            }
        }
        default: {
            return state;
        }
    }
}
