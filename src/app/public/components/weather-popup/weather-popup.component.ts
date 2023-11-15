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
    this.getCurrentWeather('Travnik');
    this.getDaysForecast('Travnik');
     
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
  forecastData:any;
  temperature: number | undefined;

  getCurrentWeather(city: string): void {
    this.weatherService.getCurrentWeather(city)
      .subscribe(data => {
        this.weatherData = data;
      }, error => {
        console.error('Error fetching weather data', error);
      });
  }
  getDaysForecast(city: string): void {
    this.weatherService.getDaysForecast()
    .subscribe(data => {
      this.forecastData = data;
    }, error => {
      console.error('Error fetching weather data', error);
    });
  }

  
}
