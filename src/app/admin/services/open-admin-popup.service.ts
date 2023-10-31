import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeventPopupComponent } from '../components/addevent-popup/addevent-popup.component';
import { AddattractionPopupComponent } from '../components/addattraction-popup/addattraction-popup.component';
import { AddfoodPopupComponent } from '../components/addfood-popup/addfood-popup.component';
import { AddaccommodationPopupComponent } from '../components/addaccommodation-popup/addaccommodation-popup.component';

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
}



