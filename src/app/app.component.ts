import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadData,loadP } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angapp18modules';
  posts$:Observable<any>=this.store.select(state=>state);
  ngOnInit(){
    console.log("HIH")
    // this.store.dispatch(loadP())
    // this.store.dispatch(loadData())
  }
  constructor(private store:Store){
    
  }
}
