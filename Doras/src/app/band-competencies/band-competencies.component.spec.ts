import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
>>>>>>> 6181f5f... modal for competency and training
import { BandCompetenciesComponent } from './band-competencies.component';

describe('BandCompetenciesComponent', () => {
  let component: BandCompetenciesComponent;
  let fixture: ComponentFixture<BandCompetenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandCompetenciesComponent ]
<<<<<<< HEAD
=======
>>>>>>> 6181f5f... modal for competency and training:Doras/src/app/band-competencies/band-competencies.component.spec.ts
>>>>>>> 6181f5f... modal for competency and training
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(BandCompetenciesComponent);
=======
<<<<<<< HEAD:Doras/src/app/admin/admin.component.spec.ts
    fixture = TestBed.createComponent(AdminComponent);
=======
    fixture = TestBed.createComponent(BandCompetenciesComponent);
>>>>>>> 6181f5f... modal for competency and training:Doras/src/app/band-competencies/band-competencies.component.spec.ts
>>>>>>> 6181f5f... modal for competency and training
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
