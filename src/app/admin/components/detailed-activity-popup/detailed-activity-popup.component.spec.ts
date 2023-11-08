import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedActivityPopupComponent } from './detailed-activity-popup.component';

describe('DetailedActivityPopupComponent', () => {
  let component: DetailedActivityPopupComponent;
  let fixture: ComponentFixture<DetailedActivityPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedActivityPopupComponent]
    });
    fixture = TestBed.createComponent(DetailedActivityPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
