import { Component } from '@angular/core';
import { OpenWeatherPopupService } from '../../services/open-weather-popup.service';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { OpenNewsletterPopupService } from '../../services/open-newsletter-popup.service';
import { OpenShortcutService } from '../../services/open-shortcut.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  slides: any[] = new Array(3).fill(EventCardComponent);

  constructor(private openWeatherService: OpenWeatherPopupService, 
    private openNewsletterService: OpenNewsletterPopupService,
    private openShortcutService: OpenShortcutService) {}
  openWeatherPopup(): void {
    this.openWeatherService.openWeatherPopup();
    document.body.className = "disapear-scroll";
  }
  openNewsletterPopup(): void {
    this.openNewsletterService.openNewsletterPopup();
    //document.body.className = "disapear-scroll";
  }  
  openShortcut1(): void {
    this.openShortcutService.openShortcut1Popup();
  }
  openShortcut2(): void {
    this.openShortcutService.openShortcut2Popup();
  }
  openShortcut3(): void {
    this.openShortcutService.openShortcut3Popup();
  }
  openShortcut4(): void {
    this.openShortcutService.openShortcut4Popup();
  }
  
}

