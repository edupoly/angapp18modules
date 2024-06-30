import { createReducer,on } from "@ngrx/store";
import { loadData, loadDataSuccess } from "./app.actions";
const initialState = {
    loading:false,
    data:null,
    error:null
}
export const dataReducer = createReducer(
    initialState,
    on(loadData,state=>{
        return {
            ...state,
            loading:true
        }
    }),
    on(loadDataSuccess,(state,action)=>{
        return {
            loading:false,
            data:action.payload,
            error:null
        }
    })
)
