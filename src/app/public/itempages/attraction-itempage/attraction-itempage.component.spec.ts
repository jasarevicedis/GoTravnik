import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionItempageComponent } from './attraction-itempage.component';

describe('AttractionItempageComponent', () => {
  let component: AttractionItempageComponent;
  let fixture: ComponentFixture<AttractionItempageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttractionItempageComponent]
    });
    fixture = TestBed.createComponent(AttractionItempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
