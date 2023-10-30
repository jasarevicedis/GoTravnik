import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginpageComponent } from './admin-loginpage.component';

describe('AdminLoginpageComponent', () => {
  let component: AdminLoginpageComponent;
  let fixture: ComponentFixture<AdminLoginpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginpageComponent]
    });
    fixture = TestBed.createComponent(AdminLoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
