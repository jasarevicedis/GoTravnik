import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodPopupComponent } from './addfood-popup.component';

describe('AddfoodPopupComponent', () => {
  let component: AddfoodPopupComponent;
  let fixture: ComponentFixture<AddfoodPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfoodPopupComponent]
    });
    fixture = TestBed.createComponent(AddfoodPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
