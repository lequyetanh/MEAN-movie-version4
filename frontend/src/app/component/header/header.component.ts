import { Component, HostListener, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { DataService } from '../../service/data.service';
import { StateService } from '../../service/state.service';
import { TranslateService } from '@ngx-translate/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MovieService } from '../../service/movie.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from './../../../movieModel/movieModel'
import { Country } from './../../../movieModel/countryModel'
import { Category } from './../../../movieModel/categoryModel';

import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { getUserFromToken, getUserFromTokenFailure } from './../../state/actions/user.actions';
import { getAllCategory } from 'src/app/state/actions/app.actions';
import { Subject } from 'rxjs';

import * as appSelector from './../../state/selectors/app.selectors';
import * as userSelector from './../../state/selectors/user.selectors';
import { getAllCountry } from './../../state/actions/app.actions';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userName: string;
    avatar: string;

    loggedIn: boolean;
    error: string;
    listMovie: Array<Movie> = [];
    movies: Movie[];
    toggle: boolean = false;
    newAvatar;
    interval: any;
    fixHeader: boolean = false;

    movieName: any;
    statusFormLogin: boolean = false;
    statusFormUser: boolean = false;
    statusSideNav: boolean = false;
    phimle: Movie[];
    destroy$: Subject<boolean> = new Subject<boolean>();

    toggleForm: boolean;

    userInfor$: Observable<any>;
    category$: Observable<Category>
    country$: Array<Country>;
    userName$: Observable<String>

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        public db: AngularFirestore,
        public dataService: DataService,
        public stateService: StateService,
        public authService: AuthService,
        private router: Router,
        public translateService: TranslateService,
        private movieService: MovieService,
        private store: Store,
    ) {
        this.store.dispatch(getUserFromToken());
        this.store.dispatch(getAllCategory());
        this.store.dispatch(getAllCountry());

        this.store.select(userSelector.userInfor).pipe(
            takeUntil(this.destroy$)
        ).subscribe(data => {
            this.userInfor$ = data;
        });

        this.store.select(appSelector.allCategory).pipe(
            takeUntil(this.destroy$)
        ).subscribe(data => {
            this.category$ = data;
        })

        this.store.select(appSelector.allCountry).pipe(
            // map(country => country),
            takeUntil(this.destroy$)
        ).subscribe(data => {
            this.country$ = data;
            // console.log(data)
        })

        // this.userInfor$ = this.store.select(userSelector.userInfor)
        // this.userName$ = this.userInfor$.pipe(map(u => {
        //     console.log(u);
        //     return u.name
        // }))
        // console.log(this.userName$)
    }

    get10Moviele(): void {
        this.movieService.get10Moviele().subscribe(movie => {
            this.phimle = movie;
        })
    }

    ngOnChanges() {

    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    @HostListener("window:scroll", ["$event"]) scrollHandler(event) {
        const height = window.scrollY;
        height >= 90 ? this.fixHeader = true : this.fixHeader = false;
    }

    clickMe() {
        // console.log("run");
        this.toggle = true;
        this.listMovie = this.movies;

        this.stateService.formSearch.next(true);
        // console.log(this.toggleForm)
    }

    blured() {
        // console.log("blured");
        this.toggle = false;
    }

    userLogin(event) {
        this.statusFormUser = false;
        this.dataService.getUser().subscribe((loggedIn) => {
            console.log(loggedIn);
            this.userName = loggedIn['loggedIn'];
            if (loggedIn['loggedIn']) {
                this.avatar = loggedIn['user'].avatar;
            }
        });
    }

    redirect(movie: any) {
        this.router.navigate([`/detailmovie/${movie}`]);
    }

    close() {
        this.movieName = null;
        this.toggle = false;
    }

    getAllMovie(): void {
        this.movieService.getAllMovie().subscribe(movie => {
            this.movies = movie;
            this.stateService.updateAllMovie(movie);
        })
    }

    removeAccents(str) {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }

    ngOnInit() {
        this.get10Moviele();
        this.toggle = false;
        this.getAllMovie();
    }

    onKeypressEvent(event: any) {
        // console.log("run")
        this.toggleForm = false;
        this.toggle = false;
        this.movieName = null;
        // console.log(this.toggle);
        this.router.navigate([`/search/${event}`]);
    }

    onKey(event: any) { // without type info
        // console.log(event.charCodeAt(1));

        this.listMovie = [];
        this.phimle = this.listMovie;       //tham chiếu trong javascript
        console.log(this.phimle)
        for (let i = 0; i < this.movies.length; i++) {
            event = this.removeAccents(event).toLowerCase();
            let name = this.removeAccents(this.movies[i].name).toLowerCase();
            // let regxName = `/${this.searchName}/i`;
            // console.log(name);
            if (name.search(event) == -1) {
                continue;
            }
            else {
                console.log(this.phimle.length)
                this.listMovie.push(this.movies[i]);
                // console.log(this.phimle);
            }
        }
        console.log(this.phimle)
        if (this.listMovie[0] == undefined) {
            // console.log("nothing");
            this.toggle = false;
        } else {
            this.toggle = true;
        }
    }

    ngAfterViewInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    onSignOut() {
        this.authService.signOut();
        window.location.reload();
    }

    setCookieDay(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    setCookieSecond(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    doLogout() {
        this.dataService.logout().subscribe((dataReturn) => {
            // console.log(dataReturn);
            this.setCookieSecond('token', dataReturn['token'], 0);
            this.userLogin("nothing");
            this.router.navigateByUrl('/movie');
        });
    }

    FormLogin() {
        this.statusFormLogin = !this.statusFormLogin;
    }

    handleData(event) {
        // console.log(event);
        this.statusFormLogin = event;
    }

    formUser() {
        // console.log(this.statusFormUser);
        this.statusFormUser = !this.statusFormUser;
    }

    openSideNav() {
        this.statusSideNav = !this.statusSideNav;
    }

    handleSideNav(event) {
        this.statusSideNav = event;
    }
}

