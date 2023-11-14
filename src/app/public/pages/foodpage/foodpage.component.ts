import { Component, OnInit } from '@angular/core';
import { OpenFoodFilterService } from '../../services/open-food-filter.service';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
  constructor(private openFoodFilter: OpenFoodFilterService,
    private apiService: ApiService) {}
  openFoodFilterPopup(): void {
    this.openFoodFilter.openFoodFilterPopup();
    document.body.className = "disapear-scroll"
  }

  foodList: any;
  
  ngOnInit(): void {
    this.apiService.getFoodAndDrinkData().subscribe((data) => {
      this.foodList = data;
    })
  }
}
