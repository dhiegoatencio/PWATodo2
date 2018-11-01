import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.interface';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  todo = {} as Todo;

  constructor() { }

  ngOnInit() {
  }

  save(todo: Todo) {
    this.todos.push(todo);
    this.todo = {} as Todo;
    this.todos = Object.assign([], this.todos);
  }

  delete(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
