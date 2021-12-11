import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as userActions from './../actions/user.actions';
import { DataService } from 'src/app/service/data.service';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private dataService: DataService,
    ) { }

    userInfor$ = createEffect(() =>
        // Observerable
        this.actions$.
            pipe(
                ofType(userActions.getUserFromToken),
                exhaustMap(() =>
                    this.dataService.getUser().pipe(
                        map(response => userActions.getUserFromTokenSuccess(response)),  //gọi đến hành động login success
                        catchError((error: any) => of(userActions.getUserFromTokenFailure(error)))
                    ) //gọi đến hành động login fail
                )
            )
    );

        userAddMovieFavorite$ = createEffect(() =>
        // Observerable
        this.actions$.
            pipe(
                ofType(userActions.userAddMovieFavorite),
                exhaustMap((action) =>
                    this.dataService.addFavoriteMovie(action.id, action.user).pipe(
                        map(response => userActions.userAddMovieFavoriteSuccess(response)),  //gọi đến hành động login success
                        catchError((error: any) => of(userActions.userAddMovieFavoriteFailure(error)))
                    ) //gọi đến hành động login fail
                )
            )
    );

}
