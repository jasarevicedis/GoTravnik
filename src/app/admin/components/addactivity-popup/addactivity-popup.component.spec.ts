import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactivityPopupComponent } from './addactivity-popup.component';

describe('AddactivityPopupComponent', () => {
  let component: AddactivityPopupComponent;
  let fixture: ComponentFixture<AddactivityPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddactivityPopupComponent]
    });
    fixture = TestBed.createComponent(AddactivityPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
