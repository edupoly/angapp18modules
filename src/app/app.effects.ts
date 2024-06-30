import { HttpClient } from '@angular/common/http';
import { loadData, loadDataSuccess } from './app.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap,map } from 'rxjs/operators';

@Injectable()
export class DataEffect{
    loadData$ = createEffect(()=>{
        return (
            this.actions$.pipe(
                ofType(loadData),
                switchMap(()=>{
                    return this.http.get("https://restcountries.com/v3/all").pipe(
                        map(data=>loadDataSuccess({payload:data}))
                    )
                })
            )
        )
    })
    constructor(private actions$:Actions,private http:HttpClient){}
}
