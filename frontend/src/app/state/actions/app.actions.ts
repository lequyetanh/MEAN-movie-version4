import { createAction, props } from '@ngrx/store';
import { User } from '../entity';

export const GET_ALL_MOVIE = '[Get All Movie Page] Get All Movie';
export const GET_ALL_MOVIE_SUCCESS = '[Get All Movie Page] Get All Movie Success';
export const GET_ALL_MOVIE_FAILURE = '[Get All Movie Page] Get All Movie Failure';

export const GET_ALL_CATEGORY = '[Get All Category Page] Get All Category';
export const GET_ALL_CATEGORY_SUCCESS = '[Get All Category Page] Get All Category Success';
export const GET_ALL_CATEGORY_FAILURE = '[Get All Category Page] Get All Category Failure';

export const GET_ALL_COUNTRY = '[Get All Country Page] Get All Country';
export const GET_ALL_COUNTRY_SUCCESS = '[Get All Country Page] Get All Country Success';
export const GET_ALL_COUNTRY_FAILURE = '[Get All Country Page] Get All Country Failure';

export const GET_MOVIE_FROM_ID = '[Get Movie From Id Page] Get Movie From Id';
export const GET_MOVIE_FROM_ID_SUCCESS = '[Get Movie From Id Page] Get Movie From Id Success';
export const GET_MOVIE_FROM_ID_FAILURE = '[Get Movie From Id Page] Get Movie From Id Failure';


export const getAllMovie = createAction(
    GET_ALL_MOVIE,
    props<{ user: User }>()
);

export const getAllMovieSuccess = createAction(
    GET_ALL_MOVIE_SUCCESS,
    props<any>()
)

export const getAllMovieFailure = createAction(
    GET_ALL_MOVIE_FAILURE,
    props<{ message: string }>()
)

export const getAllCategory = createAction(
    GET_ALL_CATEGORY,
);

export const getAllCategorySuccess = createAction(
    GET_ALL_CATEGORY_SUCCESS,
    props<{category: any}>()
)

export const getAllCategoryFailure = createAction(
    GET_ALL_CATEGORY_FAILURE,
    props<any>()
)

export const getAllCountry = createAction(
    GET_ALL_COUNTRY,
);

export const getAllCountrySuccess = createAction(
    GET_ALL_COUNTRY_SUCCESS,
    props<{country: any}>()
)

export const getAllCountryFailure = createAction(
    GET_ALL_COUNTRY_FAILURE,
    props<{ message: string }>()
)

export const getMovieFromId = createAction(
    GET_MOVIE_FROM_ID,
    props<{ id: number }>()
);

export const getMovieFromIdSuccess = createAction(
    GET_MOVIE_FROM_ID_SUCCESS,
    props<{movie: any}>()
)

export const getMovieFromIdFailure = createAction(
    GET_MOVIE_FROM_ID_FAILURE,
    props<{ message: string }>()
)