import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccommodationPageComponent } from './admin-accommodation-page.component';

describe('AdminAccommodationPageComponent', () => {
  let component: AdminAccommodationPageComponent;
  let fixture: ComponentFixture<AdminAccommodationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAccommodationPageComponent]
    });
    fixture = TestBed.createComponent(AdminAccommodationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
