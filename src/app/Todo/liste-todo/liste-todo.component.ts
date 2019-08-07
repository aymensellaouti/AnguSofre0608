import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/Todo';
import {TodoServiceService} from '../todo-service.service';

@Component({
  selector: 'app-liste-todo',
  templateUrl: './liste-todo.component.html',
  styleUrls: ['./liste-todo.component.css'],
  providers: [TodoServiceService]
})
export class ListeTodoComponent implements OnInit {
  todos: Todo[];
  todo: Todo;
  constructor(
    private todoService: TodoServiceService
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todo = new Todo();
  }
  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

}
