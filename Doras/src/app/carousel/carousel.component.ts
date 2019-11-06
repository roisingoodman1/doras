import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgElement, WithProperties } from '@angular/elements';
import { CarouselTabsComponent } from '../carousel-tabs/carousel-tabs.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./carousel.component.css'],
  styles: [`
    .carousel-item.active {
      border: solid 0.3em;
      border-color: grey;
      text-align: center;
    }
    .carousel-control-prev{
      background-color: green;
    }
    .carousel-control-next{
      background-color: green;
    }
    .carousel-indicators{
      color: chartreuse;
      height: 10px;
    }
  `]
})
export class CarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  currentTabs: string[] = ["Business Development", "Account Management", "Sales", "Inside Sales Development", "Pre Sales & Bid Management", "Marketing"];
  ngOnInit() {
  }

  onSlide(slideEvent: NgbSlideEvent) {
    const carouselTabs = document.getElementsByClassName('doras-carousel-tabs')[0] as NgElement & WithProperties<CarouselTabsComponent>;
    // carouselTabs.setTabs(this.currentTabs);
  }
}
