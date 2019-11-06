import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  styles: [`
    /deep/ .carousel-item.active {
      border: solid 0.3em;
      border-color: red;
      text-align: center;

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
