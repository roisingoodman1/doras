import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselTabsComponent } from './carousel-tabs/carousel-tabs.component';
import { RolesComponent } from './roles/roles.component';
import { TrainingPopupComponent } from './training-popup/training-popup.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { CapabilityLeadsComponent } from './capability-leads/capability-leads.component'
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ErrorInterceptor} from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpecificationComponent } from './specification/specification.component'
import { BandCompetenciesComponent } from './band-competencies/band-competencies.component';
import { AdminComponent } from './admin/admin.component';
import { AddCapabilityComponent } from './add-capability/add-capability.component';
import { DeleteCapabilityComponent } from './delete-capability/delete-capability.component';
import { AddJobFamilyComponent } from './add-job-family/add-job-family.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselTabsComponent,
    CarouselComponent,
    RolesComponent,
    TrainingPopupComponent,
    ResponsibilitiesComponent,
    CapabilityLeadsComponent,
    LoginComponent,
    MainComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
    AdminComponent,
    AddCapabilityComponent,
    DeleteCapabilityComponent,
    AddJobFamilyComponent,
    SpecificationComponent,
    BandCompetenciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {},
  }, {
    provide: MAT_DIALOG_DATA,
    useValue: {},
  },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ResponsibilitiesComponent, SpecificationComponent, TrainingPopupComponent, BandCompetenciesComponent, RolesComponent]
})
export class AppModule { }
