import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromEnvironments from './environments';

export interface AppState {
  environments: boolean;
}

export const reducers: ActionReducerMap<any> = {
  environments:  fromEnvironments.environments
};


// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
