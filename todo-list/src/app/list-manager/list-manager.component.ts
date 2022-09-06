import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoListService: TodoListService;
  
  todoList: TodoItem[];
  constructor(todoListService: TodoListService) { 
    this.todoListService = todoListService
  }

  // is the same as below
  // constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList()
  }

  addItem(title: string): void {    
    this.todoListService.addItem( { title } );
  }

  // action function method that removes the item passed from the child component
  removeItem(item): void {
    this.todoListService.deleteItem(item)
  }
}