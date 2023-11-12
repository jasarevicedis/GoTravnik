import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutespageComponent } from './routespage.component';

describe('RoutespageComponent', () => {
  let component: RoutespageComponent;
  let fixture: ComponentFixture<RoutespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutespageComponent]
    });
    fixture = TestBed.createComponent(RoutespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
