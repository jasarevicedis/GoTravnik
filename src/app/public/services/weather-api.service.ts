import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiKey = '4d85a96626aa440ffff2c7bddc3b15e6';
  private apiUrl = 'https://api.openweathermap.org/data/3.0/weather';
  constructor(private http: HttpClient) { }

    getWeather(city: string): Observable<any> {
      const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
      return this.http.get(url);
    }
  
}
