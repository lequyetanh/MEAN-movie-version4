import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from "../service/data.service";
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private dataService: DataService,
        private router: Router
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        // this.dataService.checkUser().pipe(map(user => {console.log(user)}))
        return this.dataService.checkUser().pipe(map(user => {
            console.log(user);
            return !!user
        }))
        // return of(true)
    }

    // checkUser(): Observable<any> {
        // this.dataService.getUser().subscribe((loggedIn) => {
        //     if (loggedIn['loggedIn'] == false) {
        //         this.router.navigateByUrl('/movie');
        //         return of(false);
        //     } else {
        //        return of(true);
        //     }
        // });

    //     this.dataService.getUser().pipe(map(user))
    // }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log("child true")
        return this.canActivate(next, state);
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}
