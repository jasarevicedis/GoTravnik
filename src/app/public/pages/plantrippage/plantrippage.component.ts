import { Component } from '@angular/core';
import { PlannerService } from '../../services/planner.service';


@Component({
  templateUrl: './plantrippage.component.html',
  styleUrls: ['./plantrippage.component.scss']
})
export class PlantrippageComponent {
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;
  checkbox4: boolean = false;
  checkbox5: boolean = false;
  checkbox6: boolean = false;
  checkbox7: boolean = false;
  checkbox8: boolean = false;
  constructor(private dataService: PlannerService) {}

  // Update this method based on your form structure
  updateSelectedValues() {
    const selectedValues: string[] = []; // Populate this array based on your form data
    this.dataService.updateSelectedValues(selectedValues);
  }
  
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
