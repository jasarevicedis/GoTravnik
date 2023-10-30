import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-weather-popup',
  templateUrl: './weather-popup.component.html',
  styleUrls: ['./weather-popup.component.scss']
})
export class WeatherPopupComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<WeatherPopupComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  closeWeather(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
  
  
}
