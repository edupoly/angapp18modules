import { counterReducer } from './../counter.reducer';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$?:Observable<number>;
  constructor(private store:Store<{cnt:number}>,private cs:CountriesService){
    this.count$=this.store.select('cnt');
    this.cs.getAllCountries()
  }

}
