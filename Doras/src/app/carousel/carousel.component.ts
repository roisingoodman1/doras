import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
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
    }
  `]
})
export class CarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {
  }

}
