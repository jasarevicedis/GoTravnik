import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventpageComponent } from './admin-eventpage.component';

describe('AdminEventpageComponent', () => {
  let component: AdminEventpageComponent;
  let fixture: ComponentFixture<AdminEventpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEventpageComponent]
    });
    fixture = TestBed.createComponent(AdminEventpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
