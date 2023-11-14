import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-accommodation-itempage',
  templateUrl: './accommodation-itempage.component.html',
  styleUrls: ['./accommodation-itempage.component.scss']
})
export class AccommodationItempageComponent implements OnInit {
  itemId: number | undefined;
  item: any; // Change the type based on your API response

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private apiService: ApiService) {}

  ngOnInit() {
   
  }

  fetchItemDetails() {
    // Replace the API endpoint with your actual API endpoint
    const apiUrl = `https://your-api.com/items/${this.itemId}`;

    this.http.get(apiUrl).subscribe((data) => {
      this.item = data;
    });
  }
}
