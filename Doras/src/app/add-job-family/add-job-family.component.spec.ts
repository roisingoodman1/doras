import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobFamilyComponent } from './add-job-family.component';

describe('AddJobFamilyComponent', () => {
  let component: AddJobFamilyComponent;
  let fixture: ComponentFixture<AddJobFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
