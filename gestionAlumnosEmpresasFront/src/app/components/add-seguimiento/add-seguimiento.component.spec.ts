import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeguimientoComponent } from './add-seguimiento.component';

describe('AddSeguimientoComponent', () => {
  let component: AddSeguimientoComponent;
  let fixture: ComponentFixture<AddSeguimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSeguimientoComponent]
    });
    fixture = TestBed.createComponent(AddSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
