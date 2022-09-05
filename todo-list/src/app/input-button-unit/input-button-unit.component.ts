import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title: string = '== TO-DO LIST =='
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  submitValue(newTitle:string): void {  
      this.submit.emit(newTitle)
  }

  constructor() { 
   
  }
  
  ngOnInit(): void {
    
  }


}
