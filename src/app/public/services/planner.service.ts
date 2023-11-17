import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {
  private selectedValuesSubject = new BehaviorSubject<string[]>([]);
  selectedValues$ = this.selectedValuesSubject.asObservable();

  updateSelectedValues(values: string[]) {
    this.selectedValuesSubject.next(values);
  }
  

  private apiUrl = 'https://localhost:7142/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}
}
