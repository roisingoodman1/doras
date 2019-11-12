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
import { BandCompetenciesComponent } from './band-competencies/band-competencies.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselTabsComponent,
    CarouselComponent,
    RolesComponent,
    TrainingPopupComponent,
    ResponsibilitiesComponent,
    BandCompetenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
