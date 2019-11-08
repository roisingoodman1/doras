import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityLeadComponent } from './capability-lead.component';

describe('CapabilityLeadComponent', () => {
  let component: CapabilityLeadComponent;
  let fixture: ComponentFixture<CapabilityLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilityLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
