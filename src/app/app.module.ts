import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { TodolistComponent } from './todolist/todolist.component';
import { todolistReducer } from './todolist.reducer';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffect } from './countries.effects';
import { CountriesComponent } from './countries/countries.component';
import { countriesReducer } from './countries.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodolistComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({countries:countriesReducer,cnt:counterReducer,todos:todolistReducer}),
    EffectsModule.forRoot([CountriesEffect])
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
