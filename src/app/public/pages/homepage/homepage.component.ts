import { Component } from '@angular/core';
import { OpenWeatherPopupService } from '../../services/open-weather-popup.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(private openWeatherService: OpenWeatherPopupService) {}
  openWeatherPopup(): void {
    this.openWeatherService.openWeatherPopup();
    document.body.className = "disapear-scroll"
  }

  
    
    
  
  
  
}

