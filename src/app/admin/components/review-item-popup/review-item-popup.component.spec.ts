import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewItemPopupComponent } from './review-item-popup.component';

describe('ReviewItemPopupComponent', () => {
  let component: ReviewItemPopupComponent;
  let fixture: ComponentFixture<ReviewItemPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewItemPopupComponent]
    });
    fixture = TestBed.createComponent(ReviewItemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
