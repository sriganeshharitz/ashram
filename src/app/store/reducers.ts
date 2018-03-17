import * as fromAuth from '../auth/store/auth-reducer';

export interface State {
    auth: fromAuth.State;
}

export const reducers = {
    auth: fromAuth.authReducer
};
