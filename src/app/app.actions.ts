import { createAction,props } from "@ngrx/store";
export const loadData = createAction("LOAD DATA ACTION")
export const loadDataSuccess = createAction("DATA SUCCESSFULLY LOADED",props<any>())