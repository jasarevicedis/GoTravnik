import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDatapageComponent } from './admin-datapage.component';

describe('AdminDatapageComponent', () => {
  let component: AdminDatapageComponent;
  let fixture: ComponentFixture<AdminDatapageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDatapageComponent]
    });
    fixture = TestBed.createComponent(AdminDatapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
