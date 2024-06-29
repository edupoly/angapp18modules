import { createReducer,on } from "@ngrx/store";
import { loadData, loadDataSuccess } from "./app.actions";
const initialState = {
    data:null,
    loading:false
}
export const appReducer = createReducer(
    initialState,
    on(loadData,state=>{
        return {...state,loading:true}
    }),
    on(loadDataSuccess,(state,action)=>{
        console.log("payload::",Array.isArray(action.payload.data))
        console.log("payload::",action.payload)
        return {...state,data:action.payload,loading:false}
    })
)