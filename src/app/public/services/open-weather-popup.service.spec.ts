import { TestBed } from '@angular/core/testing';

import { OpenWeatherPopupService } from './open-weather-popup.service';

describe('OpenWeatherPopupService', () => {
  let service: OpenWeatherPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenWeatherPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
