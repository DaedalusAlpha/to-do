import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoFilter: string = '';
  todos: Todo[] = [
    {
      task: 'Take out the trash',
      completed: false,
    },
    {
      task: 'Get groceries',
      completed: true,
    },
    {
      task: 'Watch LotR extended edition',
      completed: true,
    },
    {
      task: 'Watch LotR extended edition again',
      completed: false,
    },
    {
      task: 'Finish this assignment',
      completed: true,
    },
  ];

  // Function to remove a todo from the array.
  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  // Function to mark a todo item as complete.
  completeTodo(index: number): void {
    this.todos[index].completed = true;
  }

  // Function to add a todo item to the array.
  newTodo(t: Todo): void {
    this.todos.push(t);
  }
  constructor() {}

  // Check to see if the array of todos is either empty
  // or if every task is complete.
  checkComplete(): boolean {
    let result: boolean = false;
    if (this.todos.length == 0 || this.todos.every((t) => t.completed)) {
      result = true;
    }
    return result;
  }

  // Check if the todo item has text that matches the filter.
  checkFilter(t: string): boolean {
    if (t.toLowerCase().includes(this.todoFilter.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {}
}
