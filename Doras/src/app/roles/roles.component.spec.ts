import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { when, verify, anything } from 'ts-mockito';
import { RolesComponent } from './roles.component';
import { NgbSlideEvent, NgbSlideEventDirection } from '@ng-bootstrap/ng-bootstrap';
import { Job } from '../models/job';
import { ResponsibilitiesComponent } from '../responsibilities/responsibilities.component';
import { SpecificationComponent } from '../specification/specification.component';
import { Competency } from '../models/Competency';



describe('RolesComponent', () => {
  let component: RolesComponent;
  let fixture: ComponentFixture<RolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update job info on slide', () => {
    const slideLeft: NgbSlideEvent = {
      prev: 'ngb-slide-10',
      current: 'ngb-slide-9',
      paused: false,
      direction: NgbSlideEventDirection.LEFT
    };

    const job: Job = {
      jid: 3,
      bandId: 3,
      responsibility: '1. Be a Training Course Sponsor and deliver training in the Discover, Explore and Inspire schools 2. Identify and mentor high-potential, junior talent and expedite their personal development 3. Actively participate in thought leadership activities 4. Develop external networks and actively promote Kainos outside the company 5. Recommend and drive improvement initiatives that will aid the company’s growth',
      speclink: 'wwww.google.co.uk ',
      summary: 'Recognised leader and developer of Kainos talent, continuously improves Kainos, comfortable in novel situations, owns multiple initiatives, accountable for delivery at Programme level.',
      title: 'Principal Architect',
      capId: 1
    };
    component.onSlide(slideLeft);
    expect(component.firstJob[0]).toEqual(job);
  });

  it('should open responsibilities modal', () => {
    component.openDialog('job1', 'responsibility');
    component.openDialog('job2', 'responsibility');
    component.openDialog('job3', 'responsibility');
    verify(component.open(anything(), ResponsibilitiesComponent)).thrice();
  });

  it('should open specification modal', () => {
    component.openDialog('spec1', 'spec');
    component.openDialog('spec2', 'spec');
    component.openDialog('spec3', 'spec');
    verify(component.open(anything(), SpecificationComponent)).thrice();
  });
    component.onSlide(slideLeft);
    expect(component.firstJob[0]).toEqual(job);
  });

  it('should update training info on slide', () => {
    const slideLeft: NgbSlideEvent = {
      prev: 'ngb-slide-10',
      current: 'ngb-slide-9',
      paused: false,
      direction: NgbSlideEventDirection.LEFT
    };

    const competency: Competency = {
      name: '',
      description: ''
    };
    component.onSlide(slideLeft);
    expect(component.firstCompetency[0]).toEqual(competency);
  });

  it('should open responsibilities modal', () => {
    component.openFirstResponsibility();
    component.openSecondResponsibility();
    component.openThirdResponsibility();
    verify(component.openJobDialog(anything(), ResponsibilitiesComponent)).thrice();
  });

  it('should open specification modal', () => {
    component.openFirstSpec();
    component.openSecondSpec();
    component.openThirdSpec();
    verify(component.openJobDialog(anything(), SpecificationComponent)).thrice();
  });
});
