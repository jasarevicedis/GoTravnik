import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeatherPopupComponent } from '../components/weather-popup/weather-popup.component';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherPopupService {

  constructor(private dialog: MatDialog) { }

  openWeatherPopup(): void {
    this.dialog.open(WeatherPopupComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
    });

  }
}
