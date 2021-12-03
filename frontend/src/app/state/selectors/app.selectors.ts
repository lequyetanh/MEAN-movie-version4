import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromStore from './../reducers/app.reducers';

const categoryReducer = createFeatureSelector<any>(fromStore.categoryFeatureKey)

export const allCategory = createSelector(categoryReducer, state => state.category)
export const loading = createSelector(categoryReducer, state => state.loading)
export const error = createSelector(categoryReducer, state => state.error)