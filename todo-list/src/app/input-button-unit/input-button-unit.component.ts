import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'ORIGINAL';
  changeTitle(newTitle:string){
    console.log('newTitle', newTitle);
    this.title = newTitle
  }

  constructor() { 
    console.log('in constructor');
    this.title = 'CONSTRUCTOR';
    console.log(this.title);
  }
  
  ngOnInit(): void {
    
    this.title = 'ON INIT'
    this.changeTitle('My First Angular App');
  }

}
