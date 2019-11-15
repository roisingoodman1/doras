import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
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
      height: 0px;
    }
  `]
})
export class CarouselComponent implements OnInit {
  public jobFamily: JobFamily[];
  public capabilities: Capability[];
  public distinct: JobFamily[];

  constructor(config: NgbCarouselConfig, private data: DataService, private switchBoard: SwitchBoardService) {
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    this.data.getCapNameByJfId(this.distinct[+(slideEvent.current.split('-')[2])].jfid).subscribe(c => {
      this.capabilities = c;
      console.log(c)
      this.switchBoard.getCapability(this.capabilities);
    });
  }

  ngOnInit() {
    this.data.getJobFamily().subscribe(c => {
      this.jobFamily = c;
    });

    this.data.getDistinctJfids().subscribe(c => {
      this.distinct = c;
    });

    this.data.getCapNameByJfId(1).subscribe(c => {
      this.capabilities = c;
      this.switchBoard.getCapability(this.capabilities);
    });
  }

}
