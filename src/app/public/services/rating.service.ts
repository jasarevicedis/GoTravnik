import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RatingFormComponent } from '../components/rating-form/rating-form.component';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private dialog: MatDialog) { }

  openRatingPopup(): void {
    this.dialog.open(RatingFormComponent, {
      
    });

  }
  

}
