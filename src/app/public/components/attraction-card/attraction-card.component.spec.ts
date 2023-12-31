import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionCardComponent } from './attraction-card.component';

describe('AttractionCardComponent', () => {
  let component: AttractionCardComponent;
  let fixture: ComponentFixture<AttractionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttractionCardComponent]
    });
    fixture = TestBed.createComponent(AttractionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
