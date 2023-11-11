import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityShortcutComponent } from './activity-shortcut.component';

describe('ActivityShortcutComponent', () => {
  let component: ActivityShortcutComponent;
  let fixture: ComponentFixture<ActivityShortcutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityShortcutComponent]
    });
    fixture = TestBed.createComponent(ActivityShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
