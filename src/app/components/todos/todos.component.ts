import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content:'First todo',
        completed: false
      },{
        content:'Second todo',
        completed: false
      },{
        content:'Third todo',
        completed: false
      },{
        content:'Fourth todo',
        completed: false
      },{
        content:'Fifth todo',
        completed: false
      }
    ]
  }

}
