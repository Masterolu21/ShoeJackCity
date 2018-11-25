

import Debug from '../../utils/debugger';
import backend from '../../utils/backend';
import axios from 'axios';
import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
} from '../actions/types';


export const signIn = (user) => (dispatch) => {
    return new Promise(async(resolve, reject) => {
        try {
            dispatch(signInStart());

            const { email, password, alias } = user;
            const authResponse = await backend.signIn({
                email,
                password,
                alias,
            });

            dispatch(signInSuccess(authResponse));
            return resolve(authResponse);
        } catch (error) {
            Debug.error('error: ', error);

            dispatch(signInFailure(error));
            return reject(error);
        }
    });
};

export const signInStart = () => {
    return {
        type: SIGN_IN,
    };
};

export const signInSuccess = (data) => (dispatch) => {
    dispatch({
        type: SIGN_IN_SUCCESS,
        data,
    });    
};

export const signInFailure = (errorMsg) => (dispatch) => {
    dispatch({
        type: SIGN_IN_FAILURE,
        errorMsg,
    })
}
