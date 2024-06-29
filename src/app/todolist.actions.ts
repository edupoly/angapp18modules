import { createAction, props } from "@ngrx/store";
export const addNewTodo = createAction("addNewTodo",props<any>())
