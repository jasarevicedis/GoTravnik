import { Component } from '@angular/core';
import { OpenFoodFilterService } from '../../services/open-food-filter.service';

@Component({
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent {
  constructor(private openFoodFilter: OpenFoodFilterService) {}
  openFoodFilterPopup(): void {
    this.openFoodFilter.openFoodFilterPopup();
    document.body.className = "disapear-scroll"
  }
}
