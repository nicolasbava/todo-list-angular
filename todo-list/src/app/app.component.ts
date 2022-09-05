import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todoList = [
    {title: 'Instalar Node.js'},
    {title: 'servir Angular'},
    {title: 'testear js'}
  ]
}
