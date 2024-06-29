import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { loadData } from './data.actions';
// import { State } from './data.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angapp18modules';
  data$ = this.store.select(state => state.data);

  constructor(private store: Store<any>, private actions$: Actions) {}

  ngOnInit() {
    this.store.dispatch(loadData());
  }
}
