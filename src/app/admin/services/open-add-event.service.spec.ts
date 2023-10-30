import { TestBed } from '@angular/core/testing';

import { OpenAddEventService } from './open-add-event.service';

describe('OpenAddEventService', () => {
  let service: OpenAddEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAddEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
