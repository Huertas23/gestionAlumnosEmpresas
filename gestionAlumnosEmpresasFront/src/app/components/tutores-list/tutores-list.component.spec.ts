import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoresListComponent } from './tutores-list.component';

describe('TutoresListComponent', () => {
  let component: TutoresListComponent;
  let fixture: ComponentFixture<TutoresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutoresListComponent]
    });
    fixture = TestBed.createComponent(TutoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
