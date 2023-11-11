import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubmitEventComponent } from '../forms/submit-event/submit-event.component';
import { SubmitPlaceComponent } from '../forms/submit-place/submit-place.component';
import { GiveFeedbackComponent } from '../forms/give-feedback/give-feedback.component';

@Injectable({
  providedIn: 'root'
})
export class OpenFormsService {

  constructor(private dialog: MatDialog) { }

  openSubmitEventPopup(): void {
    this.dialog.open(SubmitEventComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
    });

  }
  openSubmitPlacePopup(): void {
    this.dialog.open(SubmitPlaceComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
    });

  }
  openFeedbackPopup(): void {
    this.dialog.open(GiveFeedbackComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
    });

  }
}
