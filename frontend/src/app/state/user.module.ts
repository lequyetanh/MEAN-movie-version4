import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './effects/user.effects';
import * as fromUser from './reducers/user.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature(fromUser.getUserFromTokenFeatureKey, fromUser.getUserFromTokenReducer),
        StoreModule.forFeature(fromUser.getUserSignUpFeatureKey, fromUser.getUserSignUpReducer),
        StoreModule.forFeature(fromUser.getUserLoginFeatureKey, fromUser.getUserLoginReducer),
        EffectsModule.forFeature([UserEffects])
    ]
})

export class UserModule { }