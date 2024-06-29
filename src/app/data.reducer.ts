import { createReducer, on } from '@ngrx/store';
import { loadData, loadDataSuccess } from './data.actions';

export interface State {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: State = {
  data: null,
  loading: false,
  error: null
};

export const dataReducer = createReducer(
  initialState,
  on(loadData, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(loadDataSuccess, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      data: payload
    };
  })
);