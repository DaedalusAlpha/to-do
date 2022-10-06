import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todo: Todo = {} as Todo;
  @Output() save = new EventEmitter<Todo>();

  addNewTodo(): void {
    if (this.todo.task == null || this.todo.task == '') {
      alert('Task is required');
    } else {
      let newTodo: Todo = {} as Todo;
      newTodo.completed = false;
      newTodo.task = this.todo.task;
      this.save.emit(newTodo);
      this.todo = {} as Todo;
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
