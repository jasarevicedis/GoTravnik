import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shortcut4PageComponent } from './shortcut4-page.component';

describe('Shortcut4PageComponent', () => {
  let component: Shortcut4PageComponent;
  let fixture: ComponentFixture<Shortcut4PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shortcut4PageComponent]
    });
    fixture = TestBed.createComponent(Shortcut4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
