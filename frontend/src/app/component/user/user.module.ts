import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile/profile.component';
import { CollectionComponent } from './collection/collection.component';
import { DonateComponent } from './donate/donate.component';
import { UserComponent } from './user.component';

import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { AuthGuard } from 'src/app/guard/auth.guard';

export const routes: Routes = [
    {
        path: "",
        canActivateChild: [AuthGuard],
        canLoad: [AuthGuard],
        children: [
            {
                path: 'profile', component: ProfileComponent,
            },
            {
                path: 'donate', component: DonateComponent,
            },
            {
                path: 'collection', component: CollectionComponent,
            },
        ]
    }
];

@NgModule({
    declarations: [
        ProfileComponent,
        CollectionComponent,
        DonateComponent,
        UserComponent,
    ],
    imports: [
        ShareModule,
        RouterModule.forChild(routes),
    ],
    providers: [

    ],
    bootstrap: []
})
export class UserModule { }

// ng add @angular/material: Purple/Green