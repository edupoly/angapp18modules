import { createAction, props } from "@ngrx/store";
export const loadData = createAction("load data")
export const loadDataSuccess = createAction("load data success",props<any>())
export const loadP = createAction("load Posts");
export const loadPostsSuccess = createAction("load Posts",props<any>());
