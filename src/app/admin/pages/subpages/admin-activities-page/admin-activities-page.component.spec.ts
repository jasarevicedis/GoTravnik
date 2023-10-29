import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivitiesPageComponent } from './admin-activities-page.component';

describe('AdminActivitiesPageComponent', () => {
  let component: AdminActivitiesPageComponent;
  let fixture: ComponentFixture<AdminActivitiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminActivitiesPageComponent]
    });
    fixture = TestBed.createComponent(AdminActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
