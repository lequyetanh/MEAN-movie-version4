import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromStore from './../reducers/app.reducers';

const categoryReducer = createFeatureSelector<any>(fromStore.categoryFeatureKey)
export const allCategory = createSelector(categoryReducer, state => state.category)

const countryReducer = createFeatureSelector<any>(fromStore.countryFeatureKey)
export const allCountry = createSelector(countryReducer, state => state.country)

const movieFromIdReducer = createFeatureSelector<any>(fromStore.getMovieFromIdFeatureKey)
export const movieFromId = createSelector(movieFromIdReducer, state => state.movie)

const movieFromTypeReducer = createFeatureSelector<any>(fromStore.getMovieFromTypeFeatureKey)
export const movieFromType = createSelector(movieFromTypeReducer, state => state.movie)