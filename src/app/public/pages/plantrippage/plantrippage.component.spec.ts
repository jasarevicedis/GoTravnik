import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantrippageComponent } from './plantrippage.component';

describe('PlantrippageComponent', () => {
  let component: PlantrippageComponent;
  let fixture: ComponentFixture<PlantrippageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantrippageComponent]
    });
    fixture = TestBed.createComponent(PlantrippageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
