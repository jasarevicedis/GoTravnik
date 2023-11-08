import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shortcut4-page',
  templateUrl: './shortcut4-page.component.html',
  styleUrls: ['./shortcut4-page.component.scss']
})
export class Shortcut4PageComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<Shortcut4PageComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  close(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
