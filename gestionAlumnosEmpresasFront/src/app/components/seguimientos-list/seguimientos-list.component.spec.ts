import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosListComponent } from './seguimientos-list.component';

describe('SeguimientosListComponent', () => {
  let component: SeguimientosListComponent;
  let fixture: ComponentFixture<SeguimientosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosListComponent]
    });
    fixture = TestBed.createComponent(SeguimientosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
