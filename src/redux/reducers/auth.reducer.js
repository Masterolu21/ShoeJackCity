import createReducer from '../../utils/createReducer';

import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
} from '../actions/types';

const initialState = {
    authenticated: false,
    token: null,
    account: null,
    user: null,
    signInLoading: false,
};

export default createReducer(initialState, {
    [SIGN_IN](state, action) {
        return {
            ...state,
            authenticated: false,
            signInLoading: true,
        };
    },
    [SIGN_IN_SUCCESS](state, action) {
        const { data } = action;
        return {
            ...state,
            token: data.auth.token,
            authenticated: true,
            account: data.account,
            user: data.user,
            signInLoading: false,
        };
    },
    [SIGN_IN_FAILURE](state, action) {
        return {
            ...state,
            error: action.errorMsg,
            authenticated: false,
            signInLoading: false,
        };
    },
});
