import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeventPopupComponent } from '../components/addevent-popup/addevent-popup.component';

@Injectable({
  providedIn: 'root'
})
export class OpenAddEventService {

  constructor(private dialog: MatDialog) { }

  openAddEventPopup(): void {
    this.dialog.open(AddeventPopupComponent, {
      maxWidth: '60vW',
      maxHeight: '70vh',
      height: '100%',
      width: '100%',
    });

  }
}
