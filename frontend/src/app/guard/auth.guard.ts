import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from "../service/data.service";
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as userSelector from './../state/selectors/user.selectors';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    userInfor$: Observable<any>

    constructor(
        private dataService: DataService,
        private router: Router,
        private store: Store,
    ) { }

    // chỉ dùng để xác thực quyền truy cập router nhưng vẫn load module
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        // this.dataService.checkUser().pipe(map(user => {console.log(user)}))
        return this.store.select(userSelector.userInfor).pipe(map(user => {
            // console.log(user);
            if (!!user) {
                return true;
            } else {
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

    // dùng để ngăn chặn load module khi ko có quyền truy cập
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.select(userSelector.userInfor).pipe(map(user => {
            console.log(user);
            if (!!user.name) {
                return true;
            } else {
                return false;
            }
        }))
    }
}
