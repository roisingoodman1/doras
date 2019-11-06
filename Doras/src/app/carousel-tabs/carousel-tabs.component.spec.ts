import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTabsComponent } from './carousel-tabs.component';

describe('CarouselTabsComponent', () => {
  let component: CarouselTabsComponent;
  let fixture: ComponentFixture<CarouselTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
