import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccommComponent } from './edit-accomm.component';

describe('EditAccommComponent', () => {
  let component: EditAccommComponent;
  let fixture: ComponentFixture<EditAccommComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAccommComponent]
    });
    fixture = TestBed.createComponent(EditAccommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
