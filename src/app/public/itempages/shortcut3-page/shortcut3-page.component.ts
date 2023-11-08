import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shortcut3-page',
  templateUrl: './shortcut3-page.component.html',
  styleUrls: ['./shortcut3-page.component.scss']
})
export class Shortcut3PageComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<Shortcut3PageComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  close(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
