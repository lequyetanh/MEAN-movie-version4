import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromStore from './../reducers/user.reducers';

const userReducer = createFeatureSelector<any>(fromStore.userFeatureKey)

export const userInfor = createSelector(userReducer, state => state.user);
export const loading = createSelector(userReducer, state => state.loading);
export const error = createSelector(userReducer, state => state.error)