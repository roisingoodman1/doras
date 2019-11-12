import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobFamilyComponent } from './delete-job-family.component';

describe('DeleteJobFamilyComponent', () => {
  let component: DeleteJobFamilyComponent;
  let fixture: ComponentFixture<DeleteJobFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteJobFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJobFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
