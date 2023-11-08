import { Component } from '@angular/core';
import { OpenAdminPopupService } from 'src/app/admin/services/open-admin-popup.service';




@Component({
  selector: 'app-food-subpage',
  templateUrl: './admin-food-page.component.html',
  styleUrls: ['./admin-food-page.component.scss']
})
export class AdminFoodPageComponent {
  
  constructor(private adminService: OpenAdminPopupService) {}
  openAddFoodPopup(): void {
    this.adminService.openAddFoodPopup();
  }

  
  openFoodDetailsPopup(): void {
    this.adminService.openDetailedFoodPopup();
  }
}
