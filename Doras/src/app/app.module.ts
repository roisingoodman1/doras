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
import { ComparePageComponent } from './compare-page/compare-page.component';

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
    ComparePageComponent
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
