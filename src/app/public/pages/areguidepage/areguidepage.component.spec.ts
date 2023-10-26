import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreguidepageComponent } from './areguidepage.component';

describe('AreguidepageComponent', () => {
  let component: AreguidepageComponent;
  let fixture: ComponentFixture<AreguidepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreguidepageComponent]
    });
    fixture = TestBed.createComponent(AreguidepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
