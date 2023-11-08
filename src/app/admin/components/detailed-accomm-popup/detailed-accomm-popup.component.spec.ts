import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedAccommPopupComponent } from './detailed-accomm-popup.component';

describe('DetailedAccommPopupComponent', () => {
  let component: DetailedAccommPopupComponent;
  let fixture: ComponentFixture<DetailedAccommPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedAccommPopupComponent]
    });
    fixture = TestBed.createComponent(DetailedAccommPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
