import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeHeaderComponent } from './trainee-header.component';

describe('TraineeHeaderComponent', () => {
  let component: TraineeHeaderComponent;
  let fixture: ComponentFixture<TraineeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TraineeHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
