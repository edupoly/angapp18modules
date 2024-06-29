import { createReducer,on } from "@ngrx/store";
import { addNewTodo } from "./todolist.actions";
const initialState = ['get own house','play with kids']
export const todolistReducer = createReducer(
    initialState,
    on(addNewTodo,(state,payload)=>{
        return [...state,payload.newtodo]
    })
)