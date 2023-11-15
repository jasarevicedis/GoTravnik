import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiKey = '481ca0f67dda4b26aa8172632232003';
  private apiUrl = 'https://api.openweathermap.org/data/3.0/onecall';
  private lat = 44.2294;
  private lon = 17.6430;
  private part = "current";
  constructor(private http: HttpClient) { }

    getCurrentWeather(city: string): Observable<any> {
      //const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
      const url = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=Travnik&aqi=yes`;

      return this.http.get(url);
    }
    getDaysForecast(): Observable<any> {
      const url = `https://api.weatherapi.com/v1/forecast.json?q=Travnik&days=5&hour=12&aqi=no&tp=24&key=${this.apiKey}`;
      return this.http.get(url);
    }
  
}
