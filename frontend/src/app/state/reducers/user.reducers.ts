import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../entity';
import * as userActions from '../actions/user.actions';

export const userFeatureKey = 'userReducer';
export interface State {
    user: any;
    loading: boolean;
    error: String;
}

export const initialState: State = {
    user: null,
    loading: false,
    error: null
};

export const reducer = createReducer (
    initialState,
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