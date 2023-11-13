import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent {
  activeButton: number | null = null;
  setActiveButton(buttonNumber: number) {
    this.activeButton = (this.activeButton === buttonNumber) ? null : buttonNumber;
  }
}
