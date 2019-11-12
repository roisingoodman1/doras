import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RolesComponent } from '../roles/roles.component'
import { TrainingPopupComponent } from './training-popup.component';
import { NgbSlideEvent, NgbSlideEventDirection } from '@ng-bootstrap/ng-bootstrap';
import { Competency } from '../models/Competency';

describe('TrainingPopupComponent', () => {
  let componentTraining: TrainingPopupComponent;
  let fixtureTraining: ComponentFixture<TrainingPopupComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPopupComponent, RolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixtureTraining = TestBed.createComponent(TrainingPopupComponent);
    fixtureTraining.detectChanges();
  });

  it('should create', () => {
    expect(componentTraining).toBeTruthy();
  });
});
