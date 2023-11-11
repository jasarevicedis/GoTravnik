import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newsletter-popup',
  templateUrl: './newsletter-popup.component.html',
  styleUrls: ['./newsletter-popup.component.scss']
})
export class NewsletterPopupComponent {
  constructor(private dialogRef: MatDialogRef<NewsletterPopupComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  close(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
    document.body.classList.remove("disapear-scroll");
    //document.body.className = "disapear-scroll";
  }
}
