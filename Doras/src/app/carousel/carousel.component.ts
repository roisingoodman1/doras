import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./carousel.component.css'],
  styles: [`
    .carousel-item.active {
      
      border-color: grey;
      text-align: center;
    }
    .carousel-control-prev{
      background-color: green;
      height: 3em;
    }
    .carousel-control-next{
      background-color: green;
      height: 3em;
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
  ngOnInit() {
    
  }
}
