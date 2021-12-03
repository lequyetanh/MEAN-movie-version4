import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './effects/user.effects';
import * as fromUser from './reducers/user.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
        EffectsModule.forFeature([UserEffects])
    ]
})

export class UserModule { }