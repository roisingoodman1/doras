import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BandCompetenciesComponent } from './band-competencies.component';
describe('BandCompetenciesComponent', () => {
 let component: BandCompetenciesComponent;
 let fixture: ComponentFixture<BandCompetenciesComponent>;
 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ BandCompetenciesComponent ]
   })
   .compileComponents();
 }));
 beforeEach(() => {
   fixture = TestBed.createComponent(BandCompetenciesComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });
 it('should create', () => {
   expect(component).toBeTruthy();
 });
});