import { Component } from '@angular/core';
import { OpenAdminPopupService } from 'src/app/admin/services/open-admin-popup.service';

@Component({
  selector: 'app-attractions-subpage',
  templateUrl: './admin-attractions-page.component.html',
  styleUrls: ['./admin-attractions-page.component.scss']
})
export class AdminAttractionsPageComponent {
  constructor(private openAttractionDetails: OpenAdminPopupService) {}
  openAttractionDetailsPopup(): void {
    this.openAttractionDetails.openDetailedAttractionPopup();
  }
}
