import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadData, loadDataSuccess } from './data.actions';
import { of, switchMap, catchError, EMPTY } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      switchMap(() =>
        this.http.get('https://restcountries.com/v3/all').pipe(
          map(data => loadDataSuccess({ payload: data })),
          catchError(error => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}