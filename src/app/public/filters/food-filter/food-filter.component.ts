import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-food-filter',
  templateUrl: './food-filter.component.html',
  styleUrls: ['./food-filter.component.scss']
})
export class FoodFilterComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<FoodFilterComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  close(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
    document.body.className = ""//vraca scrollbar na glavnu stranicu
  }
}
