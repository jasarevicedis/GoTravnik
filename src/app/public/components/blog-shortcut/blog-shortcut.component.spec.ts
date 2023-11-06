import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogShortcutComponent } from './blog-shortcut.component';

describe('BlogShortcutComponent', () => {
  let component: BlogShortcutComponent;
  let fixture: ComponentFixture<BlogShortcutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogShortcutComponent]
    });
    fixture = TestBed.createComponent(BlogShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
