import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect,ofType } from "@ngrx/effects";
import { loadData, loadDataSuccess, loadP, loadPostsSuccess } from "./app.actions";
import { switchMap,map, exhaustMap } from "rxjs";

@Injectable()
export class DataEffects{
    loadP$=createEffect(
        ()=>{
            return(
                this.actions$.pipe(
                    ofType(loadP),
                    switchMap(()=>{
                        return (
                            this.http.get("https://restcountries.com/v3/all").pipe(
                                map(data=>{
                                    return (loadPostsSuccess({payload:data}))
                                })
                            )
                        )
                    })
                )
            )
        }
    )
    loadData$=createEffect(
        ()=>{
            return(
                this.actions$.pipe(
                    ofType(loadData),
                    switchMap(()=>{
                        return (
                            this.http.get("http://localhost:4000/posts").pipe(
                                map(data=>{
                                    return (loadDataSuccess({payload:data}))
                                })
                            )
                        )
                    })
                )
            )
        }
    )
    

    constructor(private actions$:Actions,private http:HttpClient){}
}
