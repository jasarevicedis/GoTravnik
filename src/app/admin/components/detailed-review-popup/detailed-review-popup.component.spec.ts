import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedReviewPopupComponent } from './detailed-review-popup.component';

describe('DetailedReviewPopupComponent', () => {
  let component: DetailedReviewPopupComponent;
  let fixture: ComponentFixture<DetailedReviewPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedReviewPopupComponent]
    });
    fixture = TestBed.createComponent(DetailedReviewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
