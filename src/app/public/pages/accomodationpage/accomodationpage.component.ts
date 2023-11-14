import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './accomodationpage.component.html',
  styleUrls: ['./accomodationpage.component.scss']
})
export class AccomodationpageComponent implements OnInit {
  accommList: any;
  constructor(private apiService: ApiService) {
    
  }
  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.accommList = data;
    })
  }
}
