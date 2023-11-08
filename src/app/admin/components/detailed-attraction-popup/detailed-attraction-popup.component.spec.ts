import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedAttractionPopupComponent } from './detailed-attraction-popup.component';

describe('DetailedAttractionPopupComponent', () => {
  let component: DetailedAttractionPopupComponent;
  let fixture: ComponentFixture<DetailedAttractionPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedAttractionPopupComponent]
    });
    fixture = TestBed.createComponent(DetailedAttractionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
