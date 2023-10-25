import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationpageComponent } from './accomodationpage.component';

describe('AccomodationpageComponent', () => {
  let component: AccomodationpageComponent;
  let fixture: ComponentFixture<AccomodationpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationpageComponent]
    });
    fixture = TestBed.createComponent(AccomodationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
