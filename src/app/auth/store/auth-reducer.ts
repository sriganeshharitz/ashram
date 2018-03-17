import { AppUser } from '../model/app-user';
import * as fromAuthActions from './auth-actions';
export interface State {
    user: AppUser;
    errorMessage: string;
    startLoading: boolean;
}

const initialState: State = {
    user: null,
    errorMessage: null,
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
                errorMessage: null
            };
        }
        case fromAuthActions.REGISTRATION_FAILED: {
            console.log('err msg in reducer is ' + action.payload.message);
            return {
                ...state,
                errorMessage: action.payload.message,
                startLoading: false
            };
        }
        case fromAuthActions.REDIRECTED_AFTER_REGISTRATION: {
            return {
                ...state,
                startLoading: false,
                errorMessage: null
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
                errorMessage: null,
                user: new AppUser(action.payload.data.email, action.payload.data.fname, action.payload.data.lname)
            };
        }
        case fromAuthActions.LOGIN_FAILED: {
            return {
                ...state,
                startLoading: false,
                errorMessage: action.payload.message
            };
        }
        case fromAuthActions.LOGOUT: {
            return {
                ...state,
                user: null
            };
        }
        default: {
            return state;
        }
    }
}
