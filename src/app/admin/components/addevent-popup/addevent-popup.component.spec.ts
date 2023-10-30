import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeventPopupComponent } from './addevent-popup.component';

describe('AddeventPopupComponent', () => {
  let component: AddeventPopupComponent;
  let fixture: ComponentFixture<AddeventPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeventPopupComponent]
    });
    fixture = TestBed.createComponent(AddeventPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
