import { Component, OnInit } from '@angular/core';
import { ActivitiesMethodsService } from 'src/app/admin/services/api-methods/activities-methods.service';
import { OpenAdminPopupService } from 'src/app/admin/services/open-admin-popup.service';

@Component({
  selector: 'app-activities-subpage',
  templateUrl: './admin-activities-page.component.html',
  styleUrls: ['./admin-activities-page.component.scss']
})
export class AdminActivitiesPageComponent implements OnInit {
items: any;
  constructor(private adminService: OpenAdminPopupService,
    private apiService: ActivitiesMethodsService) {}
  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.items = data;
    })
  }

  openAddActivityPopup(): void {
    this.adminService.openAddActivityPopup();
  }
  openActivityDetailsPopup(): void {
    this.adminService.openDetailedActivityPopup();
  }
}
