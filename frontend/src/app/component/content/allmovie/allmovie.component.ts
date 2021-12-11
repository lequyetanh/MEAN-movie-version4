import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../../movieModel/movieModel';
import { MovieService } from '../../../service/movie.service';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as appSelector from './../../../state/selectors/app.selectors';
import * as ApplicationAction from './../../../state/actions/app.actions';
import * as userSelector from './../../../state/selectors/user.selectors';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { mergeMap, takeUntil, map, mergeAll } from 'rxjs/operators';

@Component({
    selector: 'app-allmovie',
    templateUrl: './allmovie.component.html',
    styleUrls: ['./allmovie.component.scss']
})
export class AllmovieComponent implements OnInit {
    type: String = null;
    movieType: Movie[];
    movies: any[];
    searchForm: FormGroup;
    array: any = [];
    list: any = [];
    movie: any = [];
    tab = false;

    genre: any = [];
    country: any = [];
    release_year: any = [];
    run_time: any = [];

    loading = true;
    array20 = [];
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute,
        private location: Location,
        public fb: FormBuilder,
        private store: Store,
    ) {
        this.array20.length = 16;
        window.scrollTo({ left: 0, top: 0 });
    }

    private allItems: any[];
    pager: any = {};
    pagedItems: any = [];


    ngOnInit() {
        this.getMovie()
        this.store.select(appSelector.movieFromType).pipe(
            takeUntil(this.destroy$)
        ).subscribe(data => {
            this.movies = data;
        })
    }

    ngOnDestroy() {
        this.destroy$.unsubscribe();
    }

    getMovie() {
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                this.loading = true;
                const type = params.get('type');
                this.type = type;
                this.store.dispatch(ApplicationAction.getMovieFromType({ genre: this.type.toString() }));
            })
    }

    ngAfterContentChecked() {
        // this.handleData(event);
    }

    goBack(): void {
        this.location.back();
    }

    handleData(event) {
        setTimeout(() => {
            this.pagedItems = event;
            this.loading = false;
        })
        // console.log(event); 
    }
}