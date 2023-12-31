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
    name: 'aaaabbbbccccccccc',
    description: 'aaaaa',
    image: 'aaaaaaa',

    telephoneNumber: '988',
    location: {
      address: 'hahahah',
      xCoordinate: 2,
      yCoordinate: 3
    },
    website: '',
    subcategories: [
      {
        name: "MOTEL",
      },
      {
        name: "URBAN",
      },
    ],
    ratings: [
      {
        value: 4,
        textComment: "dadwadadwadwa"
      },
      {
        value: 2,
        textComment: "jdhwadhgwa gj wghah wahjg agh ghjw aghg agh wagh wghj waghjw aghj"
      }
    ],
    id: 0
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
