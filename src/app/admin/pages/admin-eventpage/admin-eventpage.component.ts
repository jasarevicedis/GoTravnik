import { Component } from '@angular/core';
import { OpenAddEventService } from '../../services/open-add-event.service';

@Component({
  templateUrl: './admin-eventpage.component.html',
  styleUrls: ['./admin-eventpage.component.scss']
})
export class AdminEventpageComponent {
  constructor(private openAddEvent: OpenAddEventService) {}
  openAddEventPopup(): void {
    this.openAddEvent.openAddEventPopup();
  }
}
