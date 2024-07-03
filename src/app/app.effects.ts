import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect,ofType } from "@ngrx/effects";
import { loadData, loadDataSuccess } from "./app.actions";
import { switchMap,map } from "rxjs";

@Injectable()
export class DataEffects{
    loadData$=createEffect(
        ()=>{
            return(
                this.actions$.pipe(
                    ofType(loadData),
                    switchMap(()=>{
                        return (
                            this.http.get("https://restcountries.com/v3/all").pipe(
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
