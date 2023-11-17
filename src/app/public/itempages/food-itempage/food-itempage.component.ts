import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { RatingService } from '../../services/rating.service';

@Component({
  templateUrl: './food-itempage.component.html',
  styleUrls: ['./food-itempage.component.scss']
})
export class FoodItempageComponent implements OnInit {
  routeNumber: number =1;
  itemId: number | undefined;
  rates: any;
  item: any; // Change the type based on your API response

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private apiService: ApiService,
    private rate: RatingService) {}
  ngOnInit(): void {
    this.setupRoute();
    this.getData();
    
    //console.log(this.routeNumber);
  }
  setupRoute() {
    this.route.params.subscribe((params) => {
      console.log("Your params:", params);
      this.routeNumber = +params['number'];
    })
  }
  getData() {
    this.apiService.getFoodAndDrinkItemData(this.routeNumber).subscribe((data) => {
      this.item = data;
      this.rates = data.ratings;
    })
  }
  openRatingPopup(): void {
    this.rate.openRatingPopup();
  }
}
