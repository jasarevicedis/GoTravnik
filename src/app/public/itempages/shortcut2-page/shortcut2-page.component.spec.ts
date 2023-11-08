import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shortcut2PageComponent } from './shortcut2-page.component';

describe('Shortcut2PageComponent', () => {
  let component: Shortcut2PageComponent;
  let fixture: ComponentFixture<Shortcut2PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shortcut2PageComponent]
    });
    fixture = TestBed.createComponent(Shortcut2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
