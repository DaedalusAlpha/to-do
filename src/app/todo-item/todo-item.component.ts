import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() ind: number = 1;
  @Input() todo: Todo = {} as Todo;
  @Input() visible: boolean = true;
  @Output() complete = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  completeTodo(): void {
    this.complete.emit();
  }

  removeTodo(): void {
    this.remove.emit();
  }
}
