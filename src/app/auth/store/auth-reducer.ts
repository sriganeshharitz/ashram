import { AppUser } from '../model/app-user';
import * as fromAuthActions from './auth-actions';
import { Relative } from '../model/relative';
export interface State {
    user: AppUser;
    loginErrorMessage: string;
    registerErrorMessage: string;
    editErrorMessage: string;
    addRelativeErrorMessage: string;
    addRelativeSuccessMessage: string;
    startLoading: boolean;
    sbaId: string;
    token: string;
}

const initialState: State = {
    user: JSON.parse(localStorage.getItem('user')),
    loginErrorMessage: null,
    registerErrorMessage: null,
    editErrorMessage: null,
    addRelativeErrorMessage: null,
    addRelativeSuccessMessage: null,
    startLoading: false,
    sbaId: null,
    token: localStorage.getItem('token')
};

function createAppUserFromResponse(data: any): AppUser {
    return new AppUser(
        data.email,
        data.fname,
        data.lname,
        data.sbaId,
        data.address,
        data.mobileNum,
        data.relativeList,
        data.gender === 1 ? 'male' : 'female', new Date(data.dob));
}

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
                registerErrorMessage: null,
                sbaId: action.payload.data.sbaId
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
                user: createAppUserFromResponse(action.payload.data)
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
                editErrorMessage: null,
                user: createAppUserFromResponse(action.payload.data)
            };
        }
        case fromAuthActions.EDIT_FAILED: {
            return {
                ...state,
                startLoading: false,
                editErrorMessage: action.payload.message
            };
        }
        case fromAuthActions.RESET_ERROR_MESSAGES: {
            return {
                ...state,
                registerErrorMessage: null,
                editErrorMessage: null,
                addRelativeErrorMessage: null
            };
        }
        case fromAuthActions.ATTEMPT_ADDING_A_RELATIVE: {
            return {
                ...state,
                startLoading: true,
            };
        }
        case fromAuthActions.RELATIVE_ADDITION_SUCCESSFUL: {
            const relative: Relative = {...action.payload.data};
            return {
                ...state,
                startLoading: false,
                addRelativeErrorMessage: null,
                addRelativeSuccessMessage: 'Added a relative',
                user: createAppUserFromResponse(action.payload.data)
            };
        }
        case fromAuthActions.RELATIVE_ADDITION_FAILED: {
            return {
                ...state,
                startLoading: false,
                addRelativeErrorMessage: action.payload.message,
                addRelativeSuccessMessage: null
            };
        }
        default: {
            return state;
        }
    }
}
