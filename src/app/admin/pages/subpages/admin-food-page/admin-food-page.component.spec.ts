import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFoodPageComponent } from './admin-food-page.component';

describe('AdminFoodPageComponent', () => {
  let component: AdminFoodPageComponent;
  let fixture: ComponentFixture<AdminFoodPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFoodPageComponent]
    });
    fixture = TestBed.createComponent(AdminFoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
