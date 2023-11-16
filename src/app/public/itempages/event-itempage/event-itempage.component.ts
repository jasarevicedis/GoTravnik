import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-itempage',
  templateUrl: './event-itempage.component.html',
  styleUrls: ['./event-itempage.component.scss']
})
export class EventItempageComponent implements OnInit {
  routeNumber: number =1;
  itemId: number | undefined;
  rates: any;
  item: any; // Change the type based on your API response

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private apiService: ApiService) {}
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
    this.apiService.getEventItemData(this.routeNumber).subscribe((data) => {
      this.item = data;
      this.rates = data.ratings;
    })
  }
}
