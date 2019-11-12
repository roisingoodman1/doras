import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobFamilyComponent } from './edit-job-family.component';

describe('EditJobFamilyComponent', () => {
  let component: EditJobFamilyComponent;
  let fixture: ComponentFixture<EditJobFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJobFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
