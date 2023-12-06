import { Component, OnInit } from '@angular/core';
import { RatingMethodsService } from '../../services/api-methods/rating-methods.service';
import { OpenAdminPopupService } from '../../services/open-admin-popup.service';


@Component({
  templateUrl: './admin-reviewpage.component.html',
  styleUrls: ['./admin-reviewpage.component.scss'],
  
})
export class AdminReviewpageComponent implements OnInit {
  items: any;
  constructor(
    private apiService: RatingMethodsService,
    private openService: OpenAdminPopupService  
  ) {
    

    }
    ngOnInit(): void {
      this.apiService.getData().subscribe((data) => {
        this.items = data;
      })
    }
  openReviewItemPopup(): void {
    this.openService.openReviewItemPopup();
  }
    
}
