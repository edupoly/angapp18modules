import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadData } from '../countries.actions';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  countries$:Observable<any>=this.store.select(state=>state);
  
  constructor(private store:Store<any>){
  }
  ngOnInit(): void {
   this.store.dispatch(loadData())
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.countries$.subscribe(res=>console.log(res))
  }
}
