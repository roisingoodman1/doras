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
import { PopupsComponent } from './popups/popups.component';
import { TrainingPopupComponent } from './training-popup/training-popup.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { CapabilityLeadsComponent } from './capability-leads/capability-leads.component'
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AddCapabilityComponent } from './add-capability/add-capability.component';
import { DeleteCapabilityComponent } from './delete-capability/delete-capability.component';
import { EditCapabilityComponent } from './edit-capability/edit-capability.component';
import { EditJobFamilyComponent } from './edit-job-family/edit-job-family.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselTabsComponent,
    CarouselComponent,
    RolesComponent,
    PopupsComponent,
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
    EditCapabilityComponent,
    EditJobFamilyComponent,
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
  entryComponents: [ResponsibilitiesComponent, CapabilityLeadsComponent]
})
export class AppModule { }
