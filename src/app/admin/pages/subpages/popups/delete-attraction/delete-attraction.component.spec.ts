import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAttractionComponent } from './delete-attraction.component';

describe('DeleteAttractionComponent', () => {
  let component: DeleteAttractionComponent;
  let fixture: ComponentFixture<DeleteAttractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAttractionComponent]
    });
    fixture = TestBed.createComponent(DeleteAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
