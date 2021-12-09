import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../entity';
import * as userActions from '../actions/user.actions';
import * as userInterface from './../interface/user.interface';

export const getUserFromTokenFeatureKey = 'getUserFromTokenReducer';
export const UserFromToken: userInterface.UserFromToken = {
    user: null,
    loading: false,
    error: null,
};

export const getUserFromTokenReducer = createReducer (
    UserFromToken,
    on(userActions.getUserFromToken,  (state, action) => ({
        ...state, 
        loading: true,
    })),
    on(userActions.getUserFromTokenSuccess,  (state, action) => ({
        ...state, 
        user: action.user,
        loading: false,
    })),
    on(userActions.getUserFromTokenFailure,  (state, action) => ({
        ...state, 
      loading: false,
      error: action.message
    })),
)

export const getUserSignUpFeatureKey = 'getUserSignUpReducer';
export const UserSignUp: userInterface.UserSignUp = {
    user: null,
    loading: false,
    error: null,
};

export const getUserSignUpReducer = createReducer(
    UserSignUp,
    on(userActions.signup, (state, action) => ({
        ...state,
        loading: true,
    })),
    on(userActions.signupSuccess, (state, action) => ({
        ...state,
        user: action.user,
        loading: false,
    })),
    on(userActions.signupFailure, (state, action) => ({
        ...state,
        error: action.message,
        loading: false,
    }))
)

export const getUserLoginFeatureKey = 'getUserLoginReducer';
export const UserLogin: userInterface.UserLogin = {
    user: null,
    loading: false,
    error: null,
};

export const getUserLoginReducer = createReducer(
    UserLogin,
    on(userActions.login, (state, action) => ({
        ...state,
        loading: true,
    })),
    on(userActions.loginSuccess, (state, action) => ({
        ...state,
        user: action.user,
        loading: false,
    })),
    on(userActions.loginFailure, (state, action) => ({
        ...state,
        error: action.message,
        loading: false,
    }))
)