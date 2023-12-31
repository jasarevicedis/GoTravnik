import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesMethodsService {
  private apiUrl = 'https://localhost:7142/api';
  
  constructor(private http: HttpClient) {}

  postData(data: any): Observable<any> {
    const url = `${this.apiUrl}/Activities`;
    return this.http.post<any>(url, data);
  }
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Activities`);
  }
}
