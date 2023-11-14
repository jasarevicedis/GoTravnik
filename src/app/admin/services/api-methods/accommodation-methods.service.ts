import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccommodationData } from 'src/app/interfaces/AccommodationData';

@Injectable({
  providedIn: 'root'
})
export class AccommodationMethodsService {

  

  private apiUrl = 'https://localhost:7142/api';

  constructor(private http: HttpClient) {}

  postData(payload: AccommodationData): Observable<any> {
    const url = `${this.apiUrl}/Accommodation`; 
    return this.http.post<any>(url, payload);
  }

  

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Accommodation`);
  }
}

