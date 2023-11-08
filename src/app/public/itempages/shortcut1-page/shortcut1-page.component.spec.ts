import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shortcut1PageComponent } from './shortcut1-page.component';

describe('Shortcut1PageComponent', () => {
  let component: Shortcut1PageComponent;
  let fixture: ComponentFixture<Shortcut1PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shortcut1PageComponent]
    });
    fixture = TestBed.createComponent(Shortcut1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
