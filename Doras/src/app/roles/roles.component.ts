import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { tableBandComponent } from './../tableBand/tableBand.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor() { }

  onSlide(slideEvent: NgbSlideEvent) {
    slideEvent.current
  }

  ngOnInit() {
  }

}
