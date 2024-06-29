
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect, ofType,Actions } from "@ngrx/effects";

import { loadData, loadDataSuccess } from "./app.actions";
import { map, switchMap } from "rxjs";


@Injectable()
export class DataEffects{
    loadData$ = createEffect(()=>{
        return (this.actions.pipe(
            ofType(loadData),
            switchMap(()=>{
                console.log("HIHIH")

                return (
                    this.http.get("https://restcountries.com/v3/all").pipe(
                        map(data=>{
                            console.log("data::",Array.isArray(data))
                            return loadDataSuccess({payload:data})
                        })
                    )
                )
            })
        ))
    })
    constructor(private actions:Actions,private http:HttpClient){}
}