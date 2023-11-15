import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AttractionData } from 'src/app/interfaces/AttractionData';

@Injectable({
  providedIn: 'root'
})
export class AttractionsMethodsService {

  
  private apiUrl = 'https://localhost:7142/api';

  constructor(private http: HttpClient) {}

  postData(payload: any): Observable<any> {
    const url = `${this.apiUrl}/Attractions`; 
    return this.http.post<any>(url, payload);
  }

  

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Attractions`);
  }
}
