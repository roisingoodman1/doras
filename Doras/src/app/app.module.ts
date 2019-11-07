import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarouselTabsComponent } from './carousel-tabs/carousel-tabs.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolesComponent } from './roles/roles.component';
import { Table1Component } from './table1/table1.component';
import { PopupsComponent } from './popups/popups.component';
import { CapleadComponent } from './caplead/caplead.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselTabsComponent,
    CarouselComponent,
    RolesComponent,
    Table1Component,
    PopupsComponent,
    CapleadComponent
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
