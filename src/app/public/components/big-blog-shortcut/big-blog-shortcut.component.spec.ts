import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBlogShortcutComponent } from './big-blog-shortcut.component';

describe('BigBlogShortcutComponent', () => {
  let component: BigBlogShortcutComponent;
  let fixture: ComponentFixture<BigBlogShortcutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigBlogShortcutComponent]
    });
    fixture = TestBed.createComponent(BigBlogShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
