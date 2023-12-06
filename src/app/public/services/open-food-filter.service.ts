import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodFilterComponent } from '../filters/food-filter/food-filter.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Injectable({
  providedIn: 'root'
})
export class OpenFoodFilterService {

  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) { }

  openFoodFilterPopup(): void {
    const isMobile = this.breakpointObserver.isMatched('(max-width: 699px)');
    this.dialog.open(FoodFilterComponent, {
      maxWidth: isMobile ? '100vw' : '400px',
      maxHeight: isMobile ? '100vh' : '600px',
      height: isMobile ? '100vh' : 'auto',
      width: isMobile ? '100vw' : 'auto',
    });

  }
}
