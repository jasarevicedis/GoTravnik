import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './accomodationpage.component.html',
  styleUrls: ['./accomodationpage.component.scss']
})
export class AccomodationpageComponent implements OnInit {
  accommList: any;
  constructor(private apiService: ApiService, private router: Router) {
    
  }
  ngOnInit(): void {
    this.apiService.getAccommodationData().subscribe((data) => {
      this.accommList = data;
    })
  }
  
  
}
