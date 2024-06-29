import { createAction, props } from "@ngrx/store";
export const loadData = createAction('loadData Action')
export const loadDataSuccess = createAction('loadDataSuccess Action',props<any>())