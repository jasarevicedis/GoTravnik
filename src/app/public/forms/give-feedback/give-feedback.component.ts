import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.scss']
})
export class GiveFeedbackComponent {
  constructor(private dialogRef: MatDialogRef<GiveFeedbackComponent>) {}
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
