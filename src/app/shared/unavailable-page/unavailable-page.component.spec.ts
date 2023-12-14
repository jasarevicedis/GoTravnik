import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavailablePageComponent } from './unavailable-page.component';

describe('UnavailablePageComponent', () => {
  let component: UnavailablePageComponent;
  let fixture: ComponentFixture<UnavailablePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnavailablePageComponent]
    });
    fixture = TestBed.createComponent(UnavailablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
