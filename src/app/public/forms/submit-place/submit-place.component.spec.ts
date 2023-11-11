import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPlaceComponent } from './submit-place.component';

describe('SubmitPlaceComponent', () => {
  let component: SubmitPlaceComponent;
  let fixture: ComponentFixture<SubmitPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitPlaceComponent]
    });
    fixture = TestBed.createComponent(SubmitPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
