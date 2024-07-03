import { createAction, props } from "@ngrx/store";
export const loadData = createAction("load data")
export const loadDataSuccess = createAction("load data success",props<any>())