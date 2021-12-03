import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
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
                            map(response => appActions.getAllCategorySuccess({category: response})),  //gọi đến hành động login success
                        // }),  //gọi đến hành động login success
                        catchError((error: any) => of(appActions.getAllCategoryFailure(error)))
                    )
                )
            )
    )
}
