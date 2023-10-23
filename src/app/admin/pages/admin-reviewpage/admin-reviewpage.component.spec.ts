import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReviewpageComponent } from './admin-reviewpage.component';

describe('AdminReviewpageComponent', () => {
  let component: AdminReviewpageComponent;
  let fixture: ComponentFixture<AdminReviewpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminReviewpageComponent]
    });
    fixture = TestBed.createComponent(AdminReviewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
