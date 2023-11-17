import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodanddrinkService {

  private dataSubject = new BehaviorSubject<string[]>([]);
  public data$: Observable<string[]> = this.dataSubject.asObservable();

  updateData(data: string[]): void {
    this.dataSubject.next(data);
  }
}
