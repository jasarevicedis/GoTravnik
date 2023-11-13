import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesMethodsService {
  private apiUrl = '';
  
  constructor(private http: HttpClient) {}

  postData(data: any): Observable<any> {
    const url = `${this.apiUrl}/your-endpoint`;
    return this.http.post<any>(url, data);
  }
}
