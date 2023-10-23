import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSectionCardComponent } from './data-section-card.component';

describe('DataSectionCardComponent', () => {
  let component: DataSectionCardComponent;
  let fixture: ComponentFixture<DataSectionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSectionCardComponent]
    });
    fixture = TestBed.createComponent(DataSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
