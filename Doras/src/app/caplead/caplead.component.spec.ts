import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapleadComponent } from './caplead.component';

describe('CapleadComponent', () => {
  let component: CapleadComponent;
  let fixture: ComponentFixture<CapleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
