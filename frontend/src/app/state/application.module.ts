import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './effects/app.effects';
import * as fromApp from './reducers/app.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature(fromApp.categoryFeatureKey, fromApp.reducer),
        EffectsModule.forFeature([AppEffects])
    ]
})

export class ApplicationModule { }