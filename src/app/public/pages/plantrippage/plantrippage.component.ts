import { Component } from '@angular/core';

@Component({
  templateUrl: './plantrippage.component.html',
  styleUrls: ['./plantrippage.component.scss']
})
export class PlantrippageComponent {
  
  increment(): void {
    let value = (<HTMLInputElement>document.getElementById("step-number")).value; 
    let result = parseInt(value); 
    result++;
    (<HTMLInputElement>document.getElementById("step-number")).value = String(result);

  }
  decrement(): void {
    let value = (<HTMLInputElement>document.getElementById("step-number")).value; 
    let result = parseInt(value); 
    result--;
    (<HTMLInputElement>document.getElementById("step-number")).value = String(result);
  }
}
