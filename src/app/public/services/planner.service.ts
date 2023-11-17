import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {
   
  private combinedApiDataSubject = new BehaviorSubject<any[]>([]);
  combinedApiData$ = this.combinedApiDataSubject.asObservable();
  updateCombinedApiData(data: any[]) {
    this.combinedApiDataSubject.next(data);
  }



  private apiDataForAccommodationSubject = new BehaviorSubject<any>(null);
  apiDataForAccommodation$ = this.apiDataForAccommodationSubject.asObservable();

  private apiDataForActivitySubject = new BehaviorSubject<any>(null);
  apiDataForActivity$ = this.apiDataForActivitySubject.asObservable();

  private apiDataForAttractionSubject = new BehaviorSubject<any>(null);
  apiDataForAttraction$ = this.apiDataForAttractionSubject.asObservable();

  private apiDataForFoodAndDrinkSubject = new BehaviorSubject<any>(null);
  apiDataForFoodAndDrink$ = this.apiDataForFoodAndDrinkSubject.asObservable();

  private apiDataForEventSubject = new BehaviorSubject<any>(null);
  apiDataForEvent$ = this.apiDataForEventSubject.asObservable();

//-------------------------------------------------------------------------------

updateApiDataForAccommodation(data: any) {
  this.apiDataForAccommodationSubject.next(data);
}
updateApiDataForAttraction(data: any) {
  this.apiDataForAttractionSubject.next(data);
}
updateApiDataForActivity(data: any) {
  this.apiDataForActivitySubject.next(data);
}
updateApiDataForFoodAndDrink(data: any) {
  this.apiDataForFoodAndDrinkSubject.next(data);
}
updateApiDataForEvent(data: any) {
  this.apiDataForEventSubject.next(data);
}
  

  private selectedValuesSubject = new BehaviorSubject<string[]>([]);
  selectedValues$ = this.selectedValuesSubject.asObservable();

  updateSelectedValues(values: string[]) {
    this.selectedValuesSubject.next(values);
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'text/plain'
  });
  options = {
    headers: this.headers,
  };

  getDataForAccommodations(name: string): Observable<any> {
    const url = `${this.apiUrl}/Accommodation/filter?subcategory=${name}`;
    return this.http.get(url);
  }
  getDataForActivities(name: string): Observable<any> {
    const url = `${this.apiUrl}/Activity/filter?subcategory=${name}`;
    return this.http.get(url);
  }
  getDataForEvents(name: string): Observable<any> {
    const url = `${this.apiUrl}/Event/filter?subcategory=${name}`;
    return this.http.get(url);
  }
  getDataForFoodAndDrink(name: string): Observable<any> {
    const url = `${this.apiUrl}/FoodAndDrink/filter?subcategory=${name}`;
    return this.http.get(url);
  }
  getDataForAttractions(name: string): Observable<any> {
    const url = `${this.apiUrl}/Attraction/filter?subcategory=${name}`;
    return this.http.get(url);
  }
  

  private apiUrl = 'https://localhost:7142/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}
}
