import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './attractionspage.component.html',
  styleUrls: ['./attractionspage.component.scss']
})
export class AttractionspageComponent implements OnInit {
  attractionsList: any;
  constructor(private apiService: ApiService) {
    
  }
  ngOnInit(): void {
    this.apiService.getAttractionsData().subscribe((data) => {
      this.attractionsList = data;
    })
  }
}
