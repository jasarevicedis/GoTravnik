import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-submit-place',
  templateUrl: './submit-place.component.html',
  styleUrls: ['./submit-place.component.scss']
})
export class SubmitPlaceComponent {
  constructor(private dialogRef: MatDialogRef<SubmitPlaceComponent>) {}
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
