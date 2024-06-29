import { createReducer,on} from "@ngrx/store";
import { increment,decrement,reset } from "./counter.actions";
const initialState = 0;
export const counterReducer = createReducer(
    initialState,
    on(increment,(state)=>{return state+1}),
    on(decrement,(state)=>{return state+1}),
    on(reset,(state)=>{return initialState})
)