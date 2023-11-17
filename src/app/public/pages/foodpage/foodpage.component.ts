import { Component, OnInit } from '@angular/core';
import { OpenFoodFilterService } from '../../services/open-food-filter.service';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { FoodanddrinkService } from '../../services/foodanddrink.service';

@Component({
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
  constructor(private openFoodFilter: OpenFoodFilterService,
    private apiService: ApiService, private foodService: FoodanddrinkService) {
      
    }

    
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
  filterFoodAndDrink(): void {
    this.apiService.getFilteredFoodAndDrink(["HALAL"] ).subscribe((data)=> {
      this.foodList = data;
    })
  }
  
}


