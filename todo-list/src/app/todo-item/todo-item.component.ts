import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()
  @Output() update: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }
  ngOnInit(): void {
  }
  // create output from todo-item-component that emits the item sending to ListManager
  // Item that will be deleted

  removeItem(): void {
    this.remove.emit(this.item)
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    })
  }
}
