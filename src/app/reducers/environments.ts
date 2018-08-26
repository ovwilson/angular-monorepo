import { ActionReducer, Action } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
    production: boolean;
}

const initialState: State = { production: environment.production };

export function environments(state = initialState, action: any) {
    return state;
}
