import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shortcut3PageComponent } from './shortcut3-page.component';

describe('Shortcut3PageComponent', () => {
  let component: Shortcut3PageComponent;
  let fixture: ComponentFixture<Shortcut3PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shortcut3PageComponent]
    });
    fixture = TestBed.createComponent(Shortcut3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
