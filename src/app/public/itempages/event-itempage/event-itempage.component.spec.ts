import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventItempageComponent } from './event-itempage.component';

describe('EventItempageComponent', () => {
  let component: EventItempageComponent;
  let fixture: ComponentFixture<EventItempageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventItempageComponent]
    });
    fixture = TestBed.createComponent(EventItempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
