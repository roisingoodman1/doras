import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:Doras/src/app/admin/admin.component.spec.ts
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ]
=======
>>>>>>> 9b84f49... Employee models working with UI change
=======
>>>>>>> 72933b8... Specification modal
=======
>>>>>>> ad488f5... Specification modal
import { SpecificationComponent } from './specification.component';

describe('SpecificationComponent', () => {
  let component: SpecificationComponent;
  let fixture: ComponentFixture<SpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificationComponent ]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9b84f49... Employee models working with UI change:Doras/src/app/specification/specification.component.spec.ts
>>>>>>> 9b84f49... Employee models working with UI change
=======
>>>>>>> 72933b8... Specification modal
=======
>>>>>>> ad488f5... Specification modal
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    fixture = TestBed.createComponent(SpecificationComponent);
=======
<<<<<<< HEAD:Doras/src/app/admin/admin.component.spec.ts
    fixture = TestBed.createComponent(AdminComponent);
=======
    fixture = TestBed.createComponent(SpecificationComponent);
>>>>>>> 9b84f49... Employee models working with UI change:Doras/src/app/specification/specification.component.spec.ts
>>>>>>> 9b84f49... Employee models working with UI change
=======
    fixture = TestBed.createComponent(SpecificationComponent);
>>>>>>> 72933b8... Specification modal
=======
    fixture = TestBed.createComponent(SpecificationComponent);
>>>>>>> ad488f5... Specification modal
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
