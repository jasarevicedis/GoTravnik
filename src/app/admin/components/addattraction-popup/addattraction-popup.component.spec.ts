import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddattractionPopupComponent } from './addattraction-popup.component';

describe('AddattractionPopupComponent', () => {
  let component: AddattractionPopupComponent;
  let fixture: ComponentFixture<AddattractionPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddattractionPopupComponent]
    });
    fixture = TestBed.createComponent(AddattractionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
