import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedFoodPopupComponent } from './detailed-food-popup.component';

describe('DetailedFoodPopupComponent', () => {
  let component: DetailedFoodPopupComponent;
  let fixture: ComponentFixture<DetailedFoodPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedFoodPopupComponent]
    });
    fixture = TestBed.createComponent(DetailedFoodPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
