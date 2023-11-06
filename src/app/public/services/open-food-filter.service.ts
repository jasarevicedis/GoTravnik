import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodFilterComponent } from '../filters/food-filter/food-filter.component';

@Injectable({
  providedIn: 'root'
})
export class OpenFoodFilterService {

  constructor(private dialog: MatDialog) { }

  openFoodFilterPopup(): void {
    this.dialog.open(FoodFilterComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
    });

  }
}
