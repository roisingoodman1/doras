import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityLeadsComponent } from './capability-leads.component';

describe('CapabilityLeadsComponent', () => {
  let component: CapabilityLeadsComponent;
  let fixture: ComponentFixture<CapabilityLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilityLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
