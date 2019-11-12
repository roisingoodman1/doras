import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCapabilityComponent } from './delete-capability.component';

describe('DeleteCapabilityComponent', () => {
  let component: DeleteCapabilityComponent;
  let fixture: ComponentFixture<DeleteCapabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCapabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
