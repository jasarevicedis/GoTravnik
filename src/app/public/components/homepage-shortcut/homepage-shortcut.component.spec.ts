import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageShortcutComponent } from './homepage-shortcut.component';

describe('HomepageShortcutComponent', () => {
  let component: HomepageShortcutComponent;
  let fixture: ComponentFixture<HomepageShortcutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageShortcutComponent]
    });
    fixture = TestBed.createComponent(HomepageShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
