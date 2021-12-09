import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, scan } from 'rxjs/operators';
import { MovieService } from './../../service/movie.service';
import * as appActions from '../actions/app.actions';
import * as userActions from './../actions/user.actions';
import { DataService } from 'src/app/service/data.service';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private movieServie: MovieService,
        private dataService: DataService,
    ) { }

    allCategory$ = createEffect(() =>
        this.actions$.
            pipe(
                ofType(appActions.getAllCategory),
                exhaustMap(() =>
                    this.movieServie.getCategory().pipe(
                        // map(response => {
                        // console.log(response);
                        map(response => appActions.getAllCategorySuccess({ category: response })),  //gọi đến hành động login success
                        // }),  //gọi đến hành động login success
                        catchError((error: any) => of(appActions.getAllCategoryFailure(error)))
                    )
                )
            )
    )

    allCountry$ = createEffect(() =>
        this.actions$.
            pipe(
                ofType(appActions.getAllCountry),
                exhaustMap(() =>
                    this.movieServie.getCountry().pipe(
                        // map(response => {
                        // console.log(response);
                        map(response => appActions.getAllCountrySuccess({ country: response })),  //gọi đến hành động login success
                        // }),  //gọi đến hành động login success
                        catchError((error: any) => of(appActions.getAllCountryFailure(error)))
                    )
                )
            )
    )

    allMovie$ = createEffect(() =>
        this.actions$.
            pipe(
                ofType(appActions.getAllMovie),
                exhaustMap(() =>
                    this.movieServie.getAllMovie().pipe(
                        // map(response => {
                        // console.log(response);
                        map(response => appActions.getAllMovieSuccess({ movie: response })),  //gọi đến hành động login success
                        // }),  //gọi đến hành động login success
                        catchError((error: any) => of(appActions.getAllMovieFailure(error)))
                    )
                )
            )
    )

    movieFromId$ = createEffect(() =>
        this.actions$.
            pipe(
                ofType(appActions.getMovieFromId),
                exhaustMap((action) =>
                    this.movieServie.getMovieFromId(action.id).pipe(
                        // map(response => {
                        // console.log(response);
                        map(response => appActions.getMovieFromIdSuccess({ movie: response })),  //gọi đến hành động login success
                        // }),  //gọi đến hành động login success
                        catchError((error: any) => of(appActions.getMovieFromIdFailure(error)))
                    )
                )
            )
    )
}
