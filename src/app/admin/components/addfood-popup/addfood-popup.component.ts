import { Component } from '@angular/core';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from 'uploader'
import { FoodMethodsService } from '../../services/api-methods/food-methods.service';

@Component({
  selector: 'app-addfood-popup',
  templateUrl: './addfood-popup.component.html',
  styleUrls: ['./addfood-popup.component.scss']
})
export class AddfoodPopupComponent {
  formData: any = {}; // This should be bound to your form using ngModel or form controls

  constructor(private apiService: FoodMethodsService) {}

  onSubmit() {
    this.apiService.postData(this.formData).subscribe(
      (response) => {
        console.log('Post successful', response);
        // Handle success
      },
      (error) => {
        console.error('Error posting data', error);
        // Handle error
      }
    );
  }
}
  

