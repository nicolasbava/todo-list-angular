import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Input() item: TodoItem;

  ngOnInit(): void {
  }
  // create output from todo-item-component that emits the item sending to ListManager
  // Item that will be deleted
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()

  removeItem(): void {
    this.remove.emit(this.item)
  }
}
