import { Component } from '@angular/core';
import { OpenAdminPopupService } from '../../services/open-admin-popup.service';


@Component({
  templateUrl: './admin-eventpage.component.html',
  styleUrls: ['./admin-eventpage.component.scss']
})
export class AdminEventpageComponent {
  constructor(private openAddEvent: OpenAdminPopupService) {}
  openAddEventPopup(): void {
    this.openAddEvent.openAddEventPopup();
  }
}
