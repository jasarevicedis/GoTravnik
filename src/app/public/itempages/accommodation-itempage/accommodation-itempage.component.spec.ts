import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationItempageComponent } from './accommodation-itempage.component';

describe('AccommodationItempageComponent', () => {
  let component: AccommodationItempageComponent;
  let fixture: ComponentFixture<AccommodationItempageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccommodationItempageComponent]
    });
    fixture = TestBed.createComponent(AccommodationItempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
