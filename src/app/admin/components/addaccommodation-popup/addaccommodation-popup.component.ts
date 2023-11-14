import { Component } from '@angular/core';
import { AccommodationMethodsService } from '../../services/api-methods/accommodation-methods.service';
import { AccommodationData } from 'src/app/interfaces/AccommodationData';
@Component({
  selector: 'app-addaccommodation-popup',
  templateUrl: './addaccommodation-popup.component.html',
  styleUrls: ['./addaccommodation-popup.component.scss']
})
export class AddaccommodationPopupComponent {
  data: AccommodationData = {
    name: 'aaaa',
    description: 'aaaaa',
    image: 'aaaaaaa',
    address: 'aaaaaaaaa',
    telephoneNumber: '988',

    website: '',
    xCoordinate: 15,
    yCoordinate: 17
  };

  constructor(private apiService: AccommodationMethodsService) {}

  sendData() {
    
    this.apiService.postData(this.data).subscribe(
      (response) => {
        console.log('Post successful', response);
        // Handle the response as needed
      },
      (error) => {
        console.error('Error in post request', error);
        // Handle errors
      }
    );
  }
}
