import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WeatherApiService } from '../../services/weather-api.service';

@Component({
  selector: 'app-weather-popup',
  templateUrl: './weather-popup.component.html',
  styleUrls: ['./weather-popup.component.scss']
})
export class WeatherPopupComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<WeatherPopupComponent>,
    private weatherService: WeatherApiService
    ) {
    this.getWeather('Travnik');
      this.getTemperature('Travnik');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  closeWeather(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
    document.body.classList.remove("disapear-scroll");
    //document.body.className = "disapear-scroll";
  }
  
  weatherData: any;
  temperature: number | undefined;

  getWeather(city: string): void {
    this.weatherService.getWeather(city)
      .subscribe(data => {
        this.weatherData = data;
      }, error => {
        console.error('Error fetching weather data', error);
      });
  }

  getTemperature(city: string): void {
    this.weatherService.getWeather(city)
      .subscribe({
        // Extract temperature from the API response
        next: (data: any) => {
        this.temperature = data.main.temp;
      }, error: (error: any) => {
        console.error('Error fetching temperature data', error);
      }});
  }
}
