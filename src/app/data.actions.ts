
import { createAction, props } from "@ngrx/store";
export const loadData = createAction('Load Data Action');
export const loadDataSuccess =createAction('Load Data Success Action',props<any>())