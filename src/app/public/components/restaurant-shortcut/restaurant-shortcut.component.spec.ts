import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantShortcutComponent } from './restaurant-shortcut.component';

describe('RestaurantShortcutComponent', () => {
  let component: RestaurantShortcutComponent;
  let fixture: ComponentFixture<RestaurantShortcutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantShortcutComponent]
    });
    fixture = TestBed.createComponent(RestaurantShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
