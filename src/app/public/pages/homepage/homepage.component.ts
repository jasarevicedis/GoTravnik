import { Component } from '@angular/core';
import { OpenWeatherPopupService } from '../../services/open-weather-popup.service';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { OpenNewsletterPopupService } from '../../services/open-newsletter-popup.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  slides: any[] = new Array(3).fill(EventCardComponent);

  constructor(private openWeatherService: OpenWeatherPopupService, 
    private openNewsletterService: OpenNewsletterPopupService) {}
  openWeatherPopup(): void {
    this.openWeatherService.openWeatherPopup();
    document.body.className = "disapear-scroll";
  }
  openNewsletterPopup(): void {
    this.openNewsletterService.openNewsletterPopup();
    //document.body.className = "disapear-scroll";
  }  
  
  
}

