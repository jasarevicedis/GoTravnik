import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shortcut2-page',
  templateUrl: './shortcut2-page.component.html',
  styleUrls: ['./shortcut2-page.component.scss']
})
export class Shortcut2PageComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<Shortcut2PageComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  close(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
