import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { JobFamily } from '../models/jobFamily';
import { Capability } from '../models/capability';
import { SwitchBoardService } from '../switch-board.service';
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
  public jobFamily: JobFamily[];
  public capabilities: Capability[];


  constructor(config: NgbCarouselConfig, private data: DataService, private switchBoard: SwitchBoardService) {
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    let index = slideEvent.current.split('-')[2];
    let indexNumber = +index;
    this.data.getCapNameByJfId(indexNumber + 1).subscribe(c => {
      this.capabilities = c;
      this.switchBoard.getCapability(this.capabilities);
    });
  }
  async ngOnInit() {
    this.data.getCapNameByJfId(1).subscribe(c => {
      this.capabilities = c;
      this.switchBoard.getCapability(this.capabilities);
    });
    this.jobFamily = await this.data.getJobFamily();
  }

}
