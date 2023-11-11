import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitEventComponent } from './submit-event.component';

describe('SubmitEventComponent', () => {
  let component: SubmitEventComponent;
  let fixture: ComponentFixture<SubmitEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitEventComponent]
    });
    fixture = TestBed.createComponent(SubmitEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
