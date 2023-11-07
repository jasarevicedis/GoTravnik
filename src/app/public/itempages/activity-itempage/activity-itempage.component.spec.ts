import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityItempageComponent } from './activity-itempage.component';

describe('ActivityItempageComponent', () => {
  let component: ActivityItempageComponent;
  let fixture: ComponentFixture<ActivityItempageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityItempageComponent]
    });
    fixture = TestBed.createComponent(ActivityItempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
