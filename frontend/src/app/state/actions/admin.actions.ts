import { createAction, props } from '@ngrx/store';
import { User } from '../entity';

export const ADMIN_CREATE_MOVIE = '[Create Movie] Create Movie';
export const ADMIN_CREATE_MOVIE_SUCCESS = '[Create Movie] Create Movie Success';
export const ADMIN_CREATE_MOVIE_FAILURE = '[Create Movie] Create Movie Failure';

export const ADMIN_EDIT_MOVIE = '[Edit Movie] Edit Movie';
export const ADMIN_EDIT_MOVIE_SUCCESS = '[Edit Movie] Edit Movie Success';
export const ADMIN_EDIT_MOVIE_FAILURE = '[Edit Movie] Edit Movie Failure';

export const ADMIN_DELETE_MOVIE = '[Delete Movie] Delete';
export const ADMIN_DELETE_MOVIE_SUCCESS = '[Delete Movie] Delete Success';
export const ADMIN_DELETE_MOVIE_FAILURE = '[Delete Movie] Delete Failure';

export const ADMIN_DELETE_USER = '[Delete User] Delete User';
export const ADMIN_DELETE_USER_SUCCESS = '[Delete User] Delete User Success';
export const ADMIN_DELETE_USER_FAILURE = '[Delete User] Delete User Failure';

export const adminAddMovie = createAction(
    ADMIN_CREATE_MOVIE,
    props<{ user: User }>()
);

export const adminAddMovieSuccess = createAction(
    ADMIN_CREATE_MOVIE_SUCCESS,
    props<any>()
)

export const adminAddMovieFailure = createAction(
    ADMIN_CREATE_MOVIE_FAILURE,
    props<{ message: string }>()
)

export const adminEditMovie = createAction(
    ADMIN_EDIT_MOVIE,
    props<{ user: User }>()
);

export const adminEditMovieSuccess = createAction(
    ADMIN_EDIT_MOVIE_SUCCESS,
    props<any>()
)

export const adminEditMovieFailure = createAction(
    ADMIN_EDIT_MOVIE_FAILURE,
    props<{ message: string }>()
)


export const adminDeleteMovie = createAction(
    ADMIN_DELETE_MOVIE,
    props<{ user: User }>()
);

export const adminDeleteMovieSuccess = createAction(
    ADMIN_DELETE_MOVIE_SUCCESS,
    props<any>()
)

export const adminDeleteMovieFailure = createAction(
    ADMIN_DELETE_MOVIE_FAILURE,
    props<{ message: string }>()
)


export const adminDeleteUser = createAction(
    ADMIN_DELETE_USER,
    props<{ user: User }>()
);

export const adminDeleteUserSuccess = createAction(
    ADMIN_DELETE_USER_SUCCESS,
    props<any>()
)

export const adminDeleteUserFailure = createAction(
    ADMIN_DELETE_USER_FAILURE,
    props<{ message: string }>()
)
