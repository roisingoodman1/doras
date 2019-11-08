import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPopupComponent } from './training-popup.component';

describe('TrainingPopupComponent', () => {
  let component: TrainingPopupComponent;
  let fixture: ComponentFixture<TrainingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
