import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tableBandComponent } from './tableBand.component';

describe('tableBandComponent', () => {
  let component: tableBandComponent;
  let fixture: ComponentFixture<tableBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tableBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tableBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
