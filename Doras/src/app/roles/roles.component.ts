import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { TableSlideNumberService } from './../table-slide-number.service'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private slideService : TableSlideNumberService) { }

  onSlide(slideEvent: NgbSlideEvent) {
    let index = +(slideEvent.current.split('-')[2]);
    this.slideService.currentSlide = index;
  }

  ngOnInit() {
  }

}
