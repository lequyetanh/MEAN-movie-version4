import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './effects/app.effects';
import * as fromApp from './reducers/app.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature(fromApp.categoryFeatureKey, fromApp.categoryReducer),
        StoreModule.forFeature(fromApp.countryFeatureKey, fromApp.countryReducer),
        StoreModule.forFeature(fromApp.getAllMovieFeatureKey, fromApp.AllMovieReducer),
        StoreModule.forFeature(fromApp.getMovieFromIdFeatureKey, fromApp.MovieFromIdReducer),
        StoreModule.forFeature(fromApp.applicationSettingFeatureKey, fromApp.ApplicationSettingReducer),
        StoreModule.forFeature(fromApp.getMovieFromTypeFeatureKey, fromApp.MovieFromTypeReducer),
        EffectsModule.forFeature([AppEffects])
    ]
})

export class ApplicationModule { }