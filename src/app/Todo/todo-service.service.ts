import { Injectable } from '@angular/core';
import {Todo} from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private todos: Todo[];
  constructor() {
    this.todos = [
      new Todo('lundi', 'formation Angular'),
      new Todo('dimanche', 'dormiiiiiiiiiiiiir')
    ];
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1 ) {
      this.todos.splice(index, 1);
    } else {
      alert('Todo innexistant');
    }
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  logTodos() {
    console.log(this.todos);
  }
  logOneTodo(todo: Todo) {
    console.log(todo);
  }
}
