import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionShortcutComponent } from './attraction-shortcut.component';

describe('AttractionShortcutComponent', () => {
  let component: AttractionShortcutComponent;
  let fixture: ComponentFixture<AttractionShortcutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttractionShortcutComponent]
    });
    fixture = TestBed.createComponent(AttractionShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
