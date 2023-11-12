import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadMapComponent } from './reload-map.component';

describe('ReloadMapComponent', () => {
  let component: ReloadMapComponent;
  let fixture: ComponentFixture<ReloadMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReloadMapComponent]
    });
    fixture = TestBed.createComponent(ReloadMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
