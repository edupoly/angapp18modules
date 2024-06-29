import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import {map,exhaustMap,catchError,switchMap} from 'rxjs/operators'
import { CountriesService } from "./countries.service";
import { loadDataSuccess } from "./countries.actions";

@Injectable()
export class CountriesEffect{
    loadCountries$ = createEffect(() => this.actions.pipe(
        ofType('loadData'),
        switchMap(() =>{
          console.log("loading data...")
          return (
            this.http.get('https://restcountries.com/v3/all').pipe(
              map(data => loadDataSuccess({ payload: data })),
              catchError(()=>EMPTY)
            )
          )
        })
      )
    )
    constructor(private http:HttpClient,private actions:Actions,private cs:CountriesService){}
}
