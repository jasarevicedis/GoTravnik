import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItempageComponent } from './food-itempage.component';

describe('FoodItempageComponent', () => {
  let component: FoodItempageComponent;
  let fixture: ComponentFixture<FoodItempageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodItempageComponent]
    });
    fixture = TestBed.createComponent(FoodItempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
