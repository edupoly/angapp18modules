import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addNewTodo } from '../todolist.actions';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todos$?:Observable<any>;
  newtodo:string='';
  constructor(private store:Store<{todos:any}>){
    this.todos$=this.store.select('todos');
  }
  addTodo(){
    this.store.dispatch(addNewTodo({newtodo:this.newtodo}))
  }
}
