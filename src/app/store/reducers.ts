import * as fromAuth from '../auth/store/auth-reducer';

export interface State {
    auth: fromAuth.State;
}

export const reducers = {
    auth: fromAuth.authReducer
};

export function selectStartLoading(state: State) {
    return state.auth.startLoading;
}

export function selectAddRekativeErrorMessage(state: State) {
    return state.auth.addRelativeErrorMessage;
}

export function selectAddRekativeSuccessMessage(state: State) {
    return state.auth.addRelativeSuccessMessage;
}

export function selectUser(state: State) {
    return state.auth.user;
}

export function selectEditErrorMessage(state: State) {
    return state.auth.editErrorMessage;
}

