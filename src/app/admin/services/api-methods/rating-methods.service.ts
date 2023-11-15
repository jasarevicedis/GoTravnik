import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingMethodsService {

  private apiUrl = 'https://localhost:7142/api';

  constructor(private http: HttpClient) {}

  

  

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Rating`);
  }
}
