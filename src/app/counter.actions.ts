import { createAction } from "@ngrx/store";
export const increment = createAction('increment counter action')
export const decrement = createAction('decrement counter action')
export const reset = createAction('reset counter action')