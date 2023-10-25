import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionspageComponent } from './attractionspage.component';

describe('AttractionspageComponent', () => {
  let component: AttractionspageComponent;
  let fixture: ComponentFixture<AttractionspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttractionspageComponent]
    });
    fixture = TestBed.createComponent(AttractionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
