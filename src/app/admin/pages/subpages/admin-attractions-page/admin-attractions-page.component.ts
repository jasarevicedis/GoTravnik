import { Component } from '@angular/core';
import { AttractionsMethodsService } from 'src/app/admin/services/api-methods/attractions-methods.service';
import { OpenAdminPopupService } from 'src/app/admin/services/open-admin-popup.service';

@Component({
  selector: 'app-attractions-subpage',
  templateUrl: './admin-attractions-page.component.html',
  styleUrls: ['./admin-attractions-page.component.scss']
})
export class AdminAttractionsPageComponent {
  
  openAddAttractionPopup(): void {
    this.adminService.openAddAttractionPopup();
  }
  openAttractionDetailsPopup(): void {
    this.adminService.openDetailedAttractionPopup();
  }




  items: any;
  constructor(private adminService: OpenAdminPopupService,
    private apiService: AttractionsMethodsService) {}
  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.items = data;
    })
  }

  
}
