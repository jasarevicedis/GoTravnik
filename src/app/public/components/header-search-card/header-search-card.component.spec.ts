import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchCardComponent } from './header-search-card.component';

describe('HeaderSearchCardComponent', () => {
  let component: HeaderSearchCardComponent;
  let fixture: ComponentFixture<HeaderSearchCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSearchCardComponent]
    });
    fixture = TestBed.createComponent(HeaderSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
