import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './activitiespage.component.html',
  styleUrls: ['./activitiespage.component.scss']
})
export class ActivitiespageComponent implements OnInit {
  activityList: any;
  constructor(private apiService: ApiService) {
    
  }
  ngOnInit(): void {
    this.apiService.getActivitiesData().subscribe((data) => {
      this.activityList = data;
    })
  }
}
