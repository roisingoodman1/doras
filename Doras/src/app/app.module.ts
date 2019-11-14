import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselTabsComponent } from './carousel-tabs/carousel-tabs.component';
import { RolesComponent } from './roles/roles.component';
import { TrainingPopupComponent } from './training-popup/training-popup.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpecificationComponent } from './specification/specification.component'
import { BandCompetenciesComponent } from './band-competencies/band-competencies.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselTabsComponent,
    CarouselComponent,
    RolesComponent,
    TrainingPopupComponent,
    ResponsibilitiesComponent,
    LoginComponent,
    MainComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
    SpecificationComponent,
    BandCompetenciesComponent,
    AdminComponent
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
  ],
  bootstrap: [AppComponent],
  entryComponents: [ResponsibilitiesComponent, SpecificationComponent, TrainingPopupComponent, BandCompetenciesComponent, RolesComponent]
})
export class AppModule { }
