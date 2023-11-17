import { Component } from '@angular/core';
import { PlannerService } from '../../services/planner.service';


@Component({
  templateUrl: './plantrippage.component.html',
  styleUrls: ['./plantrippage.component.scss']
})
export class PlantrippageComponent {
  selectedRadio: string = "";
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
    if (this.selectedRadio) {
      selectedValues.push(this.selectedRadio);
    }
    if (this.checkbox1) {
      selectedValues.push('SIGHTSEEING'); // Add the corresponding value for checkbox1
    }
    if (this.checkbox2) {
      selectedValues.push('OUTDOOR'); // Add the corresponding value for checkbox1
    }
    if (this.checkbox3) {
      selectedValues.push('EVENT'); // Add the corresponding value for checkbox1
    }
    if (this.checkbox4) {
      selectedValues.push('FOOD'); // Add the corresponding value for checkbox1
    }
    if (this.checkbox5) {
      selectedValues.push('HISTORY'); // Add the corresponding value for checkbox1
    }
    if (this.checkbox6) {
      selectedValues.push('NATURE'); // Add the corresponding value for checkbox1
    }
    if (this.checkbox7) {
      selectedValues.push('RELAXATION'); // Add the corresponding value for checkbox1
    }
    if (this.checkbox8) {
      selectedValues.push('ART'); // Add the corresponding value for checkbox1
      selectedValues.push('CULTURE'); // Add the corresponding value for checkbox1

    }
    this.dataService.updateSelectedValues(selectedValues);
    
    this.dataService.getDataForAttractions('HISTORY').subscribe(data2 => {
      this.dataService.updateApiDataForAttraction(data2);
    });
    this.dataService.getDataForActivities('SPORT').subscribe(data3 => {
      this.dataService.updateApiDataForActivity(data3);
    });
    this.dataService.getDataForFoodAndDrink('CEVAPI').subscribe(data4 => {
      this.dataService.updateApiDataForFoodAndDrink(data4);
    });
    this.dataService.getDataForEvents('SPORT').subscribe(data5=> {
      this.dataService.updateApiDataForEvent(data5);
    });


    
      this.dataService.getDataForActivities('SPORT').subscribe(data2 => {
      this.dataService.getDataForAttractions('HISTORY').subscribe(data3 => {
        this.dataService.getDataForEvents('SPORT').subscribe(data4 => {
          this.dataService.getDataForFoodAndDrink('CEVAPI').subscribe(data5 => {

        // Combine data from multiple tables
        const combinedData = [
          
          {  data: data2 },
          {  data: data3 },
          {  data: data4 },
          { data: data5 },

          // Add entries for other tables as needed...
        ];

        // Update the service with combined data
        this.dataService.updateCombinedApiData(combinedData);
      });
    });
  });

});




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
