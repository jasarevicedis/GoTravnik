import { Component } from '@angular/core';
import { OpenAdminPopupService } from 'src/app/admin/services/open-admin-popup.service';

@Component({
  selector: 'app-accommodation-subpage',
  templateUrl: './admin-accommodation-page.component.html',
  styleUrls: ['./admin-accommodation-page.component.scss']
})
export class AdminAccommodationPageComponent {
  constructor(private openAccommDetails: OpenAdminPopupService) {}
  openAccommDetailsPopup(): void {
    this.openAccommDetails.openDetailedAccommodationPopup();
  }
}
