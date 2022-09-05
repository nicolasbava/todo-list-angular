import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'Input title'

  changeTitle(inputRef): string {  
  
   return this.title = inputRef
  }

  // method generate title
  generateTitle(): string {
    return 'Esto fue generado con EXITO'
  }

  constructor() { 
   
  }
  
  ngOnInit(): void {
    setTimeout(() => {
        this.title = 'LLegue'
    }, 3000);
  }

}
