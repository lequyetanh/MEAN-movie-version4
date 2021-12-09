import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from "../service/data.service";
import * as userSelector from './../state/selectors/user.selectors';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private dataService: DataService,
        private router: Router,
        private store: Store,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.store.select(userSelector.userInfor).pipe(map(user => {
            // console.log(user);
            if (user) {
                if (user.name == 'Lê Quyết Anh') {
                    return true;
                } else {
                    this.router.navigate(['/movie']);
                    return false;
                }
            }
            else {
                this.router.navigate(['/movie']);
                return false;
            }
        }))
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(next, state);
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.select(userSelector.userInfor).pipe(map(user => {
            // console.log(user);
            if (user.name == 'Lê Quyết Anh') {
                return true;
            }
            else {
                return false;
            }
        }))
    }
}
