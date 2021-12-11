import { Action, createReducer, on } from '@ngrx/store';
import * as appActions from './../actions/app.actions';
import * as ApplicationInterface from './../interface/application.interface';

export const categoryFeatureKey = 'categoryReducer';
export const categoryState: ApplicationInterface.GetAllCategory = {
    category: null,
    loading: false,
    error: null,
}

export const categoryReducer = createReducer(
    categoryState,
    on(appActions.getAllCategory, (state, result) => ({
        ...state,
        loading: true,
    })),
    on(appActions.getAllCategorySuccess, (state, result) => ({
        ...state,
        category: result.category,
        loading: false,
    })),
    on(appActions.getAllCategoryFailure, (state, result) => ({
        ...state,
        loading: false,
        error: result
    }))
)

export const countryFeatureKey = 'countryReducer';
export const countryState: ApplicationInterface.GetAllCountry = {
    country: null,
    loading: false,
    error: null,
}

export const countryReducer = createReducer(
    countryState,
    on(appActions.getAllCountry, (state, result) => ({
        ...state,
        loading: true,
    })),
    on(appActions.getAllCountrySuccess, (state, result) => ({
        ...state,
        country: result.country,
        loading: false,
    })),
    on(appActions.getAllCountryFailure, (state, result) => ({
        ...state,
        loading: false,
        error: result.message
    }))
)

export const getAllMovieFeatureKey = 'getAllMovieReducer';
export const getAllMovieState: ApplicationInterface.GetAllMovie = {
    movie: null,
    loading: false,
    error: null,
}

export const AllMovieReducer = createReducer(
    getAllMovieState,
    on(appActions.getAllMovie, (state, result) => ({
        ...state,
        loading: true,
    })),
    on(appActions.getAllMovieSuccess, (state, result) => ({
        ...state,
        movie: result.movie,
        loading: false,
    })),
    on(appActions.getAllMovieFailure, (state, result) => ({
        ...state,
        loading: false,
        error: result.message
    }))
)

export const getMovieFromIdFeatureKey = 'getMovieFromIdReducer';
export const getMovieFromIdState: ApplicationInterface.GetMovieFromId = {
    movie: null,
    loading: false,
    error: null,
}

export const MovieFromIdReducer = createReducer(
    getMovieFromIdState,
    on(appActions.getMovieFromId, (state, result) => ({
        ...state,
        loading: true,
    })),
    on(appActions.getMovieFromIdSuccess, (state, result) => ({
        ...state,
        movie: result.movie,
        loading: false,
    })),
    on(appActions.getMovieFromIdFailure, (state, result) => ({
        ...state,
        loading: false,
        error: result.message
    }))
)

export const applicationSettingFeatureKey = 'applicationSettingReducer';
export const applicationSettingReducer: any = {
    loading: false,
    error: false,
    movieSearchForm: false,
    loginForm: false,
    signUpForm: false,
    sideBar: false,
    theme: '',
    language: ''
}

export const ApplicationSettingReducer = createReducer(
    applicationSettingReducer,
    on(appActions.getAllMovie, (state, result) => ({
        ...state,
        loading: true,
    })),
    on(appActions.getAllMovieSuccess, (state, result) => ({
        ...state,
        movie: result.movie,
        loading: false,
    })),
    on(appActions.getAllMovieFailure, (state, result) => ({
        ...state,
        loading: false,
        error: result.message
    }))
)

export const getMovieFromTypeFeatureKey = 'getMovieFromTypeReducer';
export const getMovieFromTypeState: ApplicationInterface.GetMovieFromId = {
    movie: null,
    loading: false,
    error: null,
}

export const MovieFromTypeReducer = createReducer(
    getMovieFromTypeState,
    on(appActions.getMovieFromType, (state, result) => ({
        ...state,
        loading: true,
    })),
    on(appActions.getMovieFromTypeSuccess, (state, result) => ({
        ...state,
        movie: result.movie,
        loading: false,
    })),
    on(appActions.getMovieFromTypeFailure, (state, result) => ({
        ...state,
        loading: false,
        error: result.message
    }))
)