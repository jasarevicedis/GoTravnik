import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FoodanddrinkService } from '../../services/foodanddrink.service';

@Component({
  selector: 'app-food-filter',
  templateUrl: './food-filter.component.html',
  styleUrls: ['./food-filter.component.scss']
})
export class FoodFilterComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<FoodFilterComponent>,
    private api: FoodanddrinkService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  close(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
    document.body.className = ""//vraca scrollbar na glavnu stranicu
  }
  onButtonClick(): void {
    // Assume you have some logic to get the filtered data
    const filteredData: string[] = ['HALAL'];

    // Update the shared service with the filtered data
    this.api.updateData(filteredData);
  }
}
