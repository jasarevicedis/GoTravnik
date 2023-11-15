import { Component } from '@angular/core';
import { FoodMethodsService } from 'src/app/admin/services/api-methods/food-methods.service';
import { OpenAdminPopupService } from 'src/app/admin/services/open-admin-popup.service';




@Component({
  selector: 'app-food-subpage',
  templateUrl: './admin-food-page.component.html',
  styleUrls: ['./admin-food-page.component.scss']
})
export class AdminFoodPageComponent {
  
 
  openAddFoodPopup(): void {
    this.adminService.openAddFoodPopup();
  }

  
  openFoodDetailsPopup(): void {
    this.adminService.openDetailedFoodPopup();
  }


  items: any;
  constructor(private adminService: OpenAdminPopupService,
    private apiService: FoodMethodsService) {}
  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.items = data;
    })
  }

 
}
