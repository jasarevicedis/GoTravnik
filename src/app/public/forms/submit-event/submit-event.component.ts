import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-submit-event',
  templateUrl: './submit-event.component.html',
  styleUrls: ['./submit-event.component.scss']
})
export class SubmitEventComponent {
  constructor(private dialogRef: MatDialogRef<SubmitEventComponent>) {}
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
