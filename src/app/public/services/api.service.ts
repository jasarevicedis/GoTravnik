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
  getAccommodationItemData(id: number ): Observable<any> {
    return this.http.get(`${this.apiUrl}/Accommodation/${id}`); 
  }


  getActivitiesData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Activity`);
  }
  getActivityItemData(id: number ): Observable<any> {
    return this.http.get(`${this.apiUrl}/Activity/${id}`);
    
  }


  getFoodAndDrinkData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/FoodAndDrink`);
  }
  getFoodAndDrinkItemData(id: number ): Observable<any> {
    return this.http.get(`${this.apiUrl}/FoodAndDrink/${id}`);
    
  }



  getAttractionsData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Attraction`);
  }
  getAttractionItemData(id: number ): Observable<any> {
    return this.http.get(`${this.apiUrl}/Attraction/${id}`);
    
  }



  getEventData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Event`);
  }
  getEventItemData(id: number ): Observable<any> {
    return this.http.get(`${this.apiUrl}/Event/${id}`);
    
  }

  

  getAccommodationByName(name: string ): Observable<any> {
    return this.http.get(`${this.apiUrl}/Accommodation/${name}`);
    
  }
  
}
