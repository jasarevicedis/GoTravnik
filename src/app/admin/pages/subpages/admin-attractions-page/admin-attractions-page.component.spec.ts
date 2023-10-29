import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAttractionsPageComponent } from './admin-attractions-page.component';

describe('AdminAttractionsPageComponent', () => {
  let component: AdminAttractionsPageComponent;
  let fixture: ComponentFixture<AdminAttractionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAttractionsPageComponent]
    });
    fixture = TestBed.createComponent(AdminAttractionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
