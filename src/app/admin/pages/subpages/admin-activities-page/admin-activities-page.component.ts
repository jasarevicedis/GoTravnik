import { Component } from '@angular/core';
import { OpenAdminPopupService } from 'src/app/admin/services/open-admin-popup.service';

@Component({
  selector: 'app-activities-subpage',
  templateUrl: './admin-activities-page.component.html',
  styleUrls: ['./admin-activities-page.component.scss']
})
export class AdminActivitiesPageComponent {
  constructor(private openActivityDetails: OpenAdminPopupService) {}
  openActivityDetailsPopup(): void {
    this.openActivityDetails.openDetailedActivityPopup();
  }
}
