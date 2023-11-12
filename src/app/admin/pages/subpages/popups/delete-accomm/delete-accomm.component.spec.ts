import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccommComponent } from './delete-accomm.component';

describe('DeleteAccommComponent', () => {
  let component: DeleteAccommComponent;
  let fixture: ComponentFixture<DeleteAccommComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAccommComponent]
    });
    fixture = TestBed.createComponent(DeleteAccommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
