import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccommodationPopupComponent } from './addaccommodation-popup.component';

describe('AddaccommodationPopupComponent', () => {
  let component: AddaccommodationPopupComponent;
  let fixture: ComponentFixture<AddaccommodationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddaccommodationPopupComponent]
    });
    fixture = TestBed.createComponent(AddaccommodationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
