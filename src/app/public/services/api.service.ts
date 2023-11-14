import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:7142/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAccommodationData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Accommodation`);
  }
  
  getAccommodationItemData(id: number | undefined): Observable<any> {
    return this.http.get(`${this.apiUrl}/Accommodation/{${id}}`);
    
  }
  getActivitiesData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Activities`);
  }
  getFoodAndDrinkData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/FoodAndDrink`);
  }
  getAttractionsData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Attraction`);
  }
  getEventData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Event`);
  }
}
