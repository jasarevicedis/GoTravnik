import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsletterPopupComponent } from '../components/newsletter-popup/newsletter-popup.component';

@Injectable({
  providedIn: 'root'
})
export class OpenNewsletterPopupService {

  constructor(private dialog: MatDialog) { }

  openNewsletterPopup(): void {
    this.dialog.open(NewsletterPopupComponent, {
      
    });

  }
}
