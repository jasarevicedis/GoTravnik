import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.scss']
})
export class EventpageComponent implements OnInit {
  eventList: any;
  constructor(private apiService: ApiService) {
    
  }
  ngOnInit(): void {
    this.apiService.getEventData().subscribe((data) => {
      this.eventList = data;
    })
  }
}
