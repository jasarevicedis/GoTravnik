import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeventPopupComponent } from '../components/addevent-popup/addevent-popup.component';
import { AddattractionPopupComponent } from '../components/addattraction-popup/addattraction-popup.component';
import { AddfoodPopupComponent } from '../components/addfood-popup/addfood-popup.component';
import { AddaccommodationPopupComponent } from '../components/addaccommodation-popup/addaccommodation-popup.component';
import { DetailedActivityPopupComponent } from '../components/detailed-activity-popup/detailed-activity-popup.component';
import { DetailedAccommPopupComponent } from '../components/detailed-accomm-popup/detailed-accomm-popup.component';
import { DetailedFoodPopupComponent } from '../components/detailed-food-popup/detailed-food-popup.component';
import { DetailedAttractionPopupComponent } from '../components/detailed-attraction-popup/detailed-attraction-popup.component';
import { AddactivityPopupComponent } from '../components/addactivity-popup/addactivity-popup.component';
import { DeleteItemComponent } from '../components/delete-item/delete-item.component';
import { ReviewItemPopupComponent } from '../components/review-item-popup/review-item-popup.component';

@Injectable({
  providedIn: 'root'
})
export class OpenAdminPopupService {

  constructor(private dialog: MatDialog) { }

  openAddEventPopup(): void {
    this.dialog.open(AddeventPopupComponent, {});
  }
  openAddAttractionPopup(): void {
    this.dialog.open(AddattractionPopupComponent, {});
  }
  openAddFoodPopup(): void {
    this.dialog.open(AddfoodPopupComponent, {});
  }
  openAddAccommodationPopup(): void {
    this.dialog.open(AddaccommodationPopupComponent, {});
  }
  openAddActivityPopup(): void {
    this.dialog.open(AddactivityPopupComponent, {});
  }
  openDetailedActivityPopup() : void {
    this.dialog.open(DetailedActivityPopupComponent, {});
  }
  openDetailedAccommodationPopup() : void {
    this.dialog.open(DetailedAccommPopupComponent, {});
  }
  openDetailedFoodPopup() : void {
    this.dialog.open(DetailedFoodPopupComponent, {});
  }
  openDetailedAttractionPopup() : void {
    this.dialog.open(DetailedAttractionPopupComponent, {});
  }

  openDeleteItem(): void {
    this.dialog.open(DeleteItemComponent, {});
  }

  openReviewItemPopup(): void {
    this.dialog.open(ReviewItemPopupComponent, {});
  }
  
}



