import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiespageComponent } from './activitiespage.component';

describe('ActivitiespageComponent', () => {
  let component: ActivitiespageComponent;
  let fixture: ComponentFixture<ActivitiespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiespageComponent]
    });
    fixture = TestBed.createComponent(ActivitiespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
