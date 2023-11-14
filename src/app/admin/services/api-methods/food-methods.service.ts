import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodMethodsService {
  private apiUrl = 'https://localhost:7142/api';

  constructor(private http: HttpClient) {}

  postData(payload: any): Observable<any> {
    const url = `${this.apiUrl}/Accommodation`; 
    return this.http.post<any>(url, payload);
  }

  

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Accommodation`);
  }
}
