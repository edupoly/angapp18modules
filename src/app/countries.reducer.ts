import { createReducer,on } from "@ngrx/store";
import { loadData,loadDataSuccess } from "./countries.actions";
const initialState={
    loading:false,
    data:null,
    error:null
}

export const countriesReducer = createReducer(
    initialState,
    on(loadData,(state)=>{
        return {
            ...state,
            loading:true
        }
    }),
    on(loadDataSuccess,(state,payload)=>{
        console.log("HI success")

        return {
            ...state,
            loading:false,
            data:payload
        }
    })
)