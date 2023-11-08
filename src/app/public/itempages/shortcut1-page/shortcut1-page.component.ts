import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shortcut1-page',
  templateUrl: './shortcut1-page.component.html',
  styleUrls: ['./shortcut1-page.component.scss']
})
export class Shortcut1PageComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<Shortcut1PageComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  close(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
