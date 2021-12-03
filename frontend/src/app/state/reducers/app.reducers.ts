import { Action, createReducer, on } from '@ngrx/store';
import * as appActions from './../actions/app.actions';

export const categoryFeatureKey = 'categoryReducer';
export interface State { 
    category: any;
    loading: boolean;
    error: string;
}

export const initialState: State = {
    category: null,
    loading: false,
    error: null,
}

export const reducer = createReducer (
    initialState,
    on(appActions.getAllCategory, (state, result) => ({
        ...state,
        loading: true,
    })),
    on(appActions.getAllCategorySuccess, (state, result) => ({
        ...state,
        category: result.category,
        loading: false,
    })),
    on(appActions.getAllCategoryFailure, (state, result) =>({
        ...state,
        loading: false,
        error: result
    }))
)