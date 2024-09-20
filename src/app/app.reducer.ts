import { createReducer,on } from "@ngrx/store";
import { loadData,loadDataSuccess, loadP, loadPostsSuccess } from "./app.actions";
const initialState = {
    loading:false,
    countries:null,
    posts:null,
    error:null
}
export const dataReducer = createReducer(
    initialState,
    on(loadData,state=>{
        return {
            ...state,
            loading:true,
        }
    }),
    on(loadDataSuccess,(state,action)=>{
        return {
            ...state,
            loading:false,
            counties:action.payload,
            error:null,
        }
    }),
    on(loadP,state=>{
        console.log("Load Posts")
        return {
                ...state,
                loading:true
        }
        
    }),
    on(loadPostsSuccess,(state,action)=>{
        return {
            ...state,
            loading:false,
            posts:action.payload,
            error:null
        }
    })
)