import { Component, OnInit } from '@angular/core';
import { OpenWeatherPopupService } from '../../services/open-weather-popup.service';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { OpenNewsletterPopupService } from '../../services/open-newsletter-popup.service';
import { OpenShortcutService } from '../../services/open-shortcut.service';
import { OpenFormsService } from '../../services/open-forms.service';
import { WeatherApiService } from '../../services/weather-api.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  slides: any[] = new Array(3).fill(EventCardComponent);

  constructor(private openWeatherService: OpenWeatherPopupService, 
    private openNewsletterService: OpenNewsletterPopupService,
    private openShortcutService: OpenShortcutService,
    private weatherService: WeatherApiService,
    private apiService: ApiService
    
    ) {
      
    }
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

  
  foodList: any;
  eventList: any;
  attractionList: any;
  accommodationList: any;
  activityList: any;

  ngOnInit(): void {
    this.apiService.getFoodAndDrinkData().subscribe((data) => {
      this.foodList = data;
    });
    this.apiService.getEventData().subscribe((data) => {
      this.eventList = data;
    });
    this.apiService.getAttractionsData().subscribe((data) => {
      this.attractionList = data;
    });
    this.apiService.getActivitiesData().subscribe((data) => {
      this.activityList = data;
    });
    this.apiService.getAccommodationData().subscribe((data) => {
      this.accommodationList = data;
    })
  }
  
}

