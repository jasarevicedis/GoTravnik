import { Component } from '@angular/core';
import { OpenAdminPopupService } from 'src/app/admin/services/open-admin-popup.service';


@Component({
  templateUrl: './admin-food-page.component.html',
  styleUrls: ['./admin-food-page.component.scss']
})
export class AdminFoodPageComponent {
  constructor(private openAddFood: OpenAdminPopupService) {}
  openAddFoodPopup(): void {
    this.openAddFood.openAddFoodPopup();
  }
}
