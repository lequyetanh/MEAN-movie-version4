import { createAction, props } from "@ngrx/store";
// import { User } from './../entity';

export const USER_SIGNUP = '[Signup] Signup';
export const USER_SIGNUP_SUCCESS = '[Signup] Signup Success';
export const USER_SIGNUP_FAILURE = '[Signup] Signup Failure';

export const USER_LOGIN = '[Login] Login';
export const USER_LOGIN_SUCCESS = '[Login] Login Success';
export const USER_LOGIN_FAILURE = '[Login] Login Failure';

export const USER_ADD_MOVIE_FAVORITE = '[Add Movie Favorite] Add Movie Favorite';
export const USER_ADD_MOVIE_FAVORITE_SUCCESS = '[Add Movie Favorite] Add Movie Favorite Success';
export const USER_ADD_MOVIE_FAVORITE_FAILURE = '[Add Movie Favorite] Add Movie Favorite Failure';

export const USER_ADD_MOVIE_WATCH_LATER = '[Add Movie Watch Later] Add Movie Watch Later';
export const USER_ADD_MOVIE_WATCH_LATER_SUCCESS = '[Add Movie Watch Later] Add Movie Watch Later Success';
export const USER_ADD_MOVIE_WATCH_LATER_FAILURE = '[Add Movie Watch Later] Add Movie Watch Later Failure';

export const USER_DELETE_MOVIE_FAVORITE = '[Delete Movie Favorite] Delete Movie Favorite';
export const USER_DELETE_MOVIE_FAVORITE_SUCCESS = '[Delete Movie Favorite] Delete Movie Favorite Success';
export const USER_DELETE_MOVIE_FAVORITE_FAILURE = '[Delete Movie Favorite] Delete Movie Favorite Failure';

export const USER_DELETE_MOVIE_WATCH_LATER = '[Delete Movie Watch Later] Delete Movie Watch Later';
export const USER_DELETE_MOVIE_WATCH_LATER_SUCCESS = '[Delete Movie Watch Later] Delete Movie Watch Later Success';
export const USER_DELETE_MOVIE_WATCH_LATER_FAILURE = '[Delete Movie Watch Later] Signup Failure';

export const GET_USER_FROM_TOKEN = '[Get User From Token Page] Get User From Token';
export const GET_USER_FROM_TOKEN_SUCCESS = '[Get User From Token Page] Get User From Token Success';
export const GET_USER_FROM_TOKEN_FAILURE = '[Get User From Token Page] Get User From Token Failure';

export const signup = createAction(
    USER_SIGNUP,
    props<any>()
);

export const signupSuccess = createAction(
    USER_SIGNUP_SUCCESS,
    props<any>()
)

export const signupFailure = createAction(
    USER_SIGNUP_FAILURE,
    props<{ message: string }>()
)

export const login = createAction(
    USER_LOGIN,
    props<any>()
);

// khai báo action loginSuccess
export const loginSuccess = createAction(
    USER_LOGIN_SUCCESS,
    props<any>()
)

// khai báo action loginFailure
export const loginFailure = createAction(
    USER_LOGIN_FAILURE,
    props<{ message: string }>()
)

export const userAddMovieFavorite = createAction(
    USER_ADD_MOVIE_FAVORITE,
    props<any>()
);

export const userAddMovieFavoriteSuccess = createAction(
    USER_ADD_MOVIE_FAVORITE_SUCCESS,
    props<any>()
)

export const userAddMovieFavoriteFailure = createAction(
    USER_ADD_MOVIE_FAVORITE_FAILURE,
    props<{ message: string }>()
)

export const userAddMovieWatchLater = createAction(
    USER_ADD_MOVIE_WATCH_LATER,
    props<any>()
);

export const userAddMovieWatchLaterSuccess = createAction(
    USER_ADD_MOVIE_WATCH_LATER_SUCCESS,
    props<any>()
)

export const userAddMovieWatchLaterFailure = createAction(
    USER_ADD_MOVIE_WATCH_LATER_FAILURE,
    props<{ message: string }>()
)

export const userDeleteMovieFavorite = createAction(
    USER_DELETE_MOVIE_FAVORITE,
    props<any>()
);

export const userDeleteMovieFavoriteSuccess = createAction(
    USER_DELETE_MOVIE_FAVORITE_SUCCESS,
    props<any>()
)

export const userDeleteMovieFavoriteFailure = createAction(
    USER_DELETE_MOVIE_FAVORITE_FAILURE,
    props<{ message: string }>()
)

export const userDeleteMovieWatchLater = createAction(
    USER_DELETE_MOVIE_WATCH_LATER,
    props<any>()
);

export const userDeleteMovieWatchLaterSuccess = createAction(
    USER_DELETE_MOVIE_WATCH_LATER_SUCCESS,
    props<any>()
)

export const userDeleteMovieWatchLaterFailure = createAction(
    USER_DELETE_MOVIE_WATCH_LATER_FAILURE,
    props<{ message: string }>()
)

export const getUserFromToken = createAction(
    GET_USER_FROM_TOKEN,
);

export const getUserFromTokenSuccess = createAction(
    GET_USER_FROM_TOKEN_SUCCESS,
    props<any>()
)

export const getUserFromTokenFailure = createAction(
    GET_USER_FROM_TOKEN_FAILURE,
    // dữ liệu truyền vào phải đúng dạng { message: string }
    props<{ message: string }>()
)
