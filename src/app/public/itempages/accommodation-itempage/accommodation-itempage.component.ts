import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accommodation-itempage',
  templateUrl: './accommodation-itempage.component.html',
  styleUrls: ['./accommodation-itempage.component.scss']
})
export class AccommodationItempageComponent implements OnInit {
  itemId: number | undefined;
  @Input() item: any; // Change the type based on your API response

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getAccommodationItemData(this.item.id).subscribe((data) => {
      this.item = data;
    })
    console.log('Your Object:', this.item);
  }

  

   
}
