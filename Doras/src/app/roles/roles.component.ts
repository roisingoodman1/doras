import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { TableSlideNumberService } from './../table-slide-number.service'
import { DataService } from '../data.service';
import { Band } from '../models/Band';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public bands: Band[];
  public endArray: any[];

  constructor(private slideService : TableSlideNumberService, private data: DataService) { }

  onSlide(slideEvent: NgbSlideEvent) {
    let index = +(slideEvent.current.split('-')[2]);
    this.slideService.currentSlide = index;
  }

  ngOnInit() {
    this.data.getBand().subscribe(c => {
      this.bands = c.reverse();

      let array = []
      let chunk = 3
      let next
      let length = this.bands.length
      for (let i = 0; i < length; i+=chunk) {
        next = i + 3
        array.push(this.bands.slice(i, next))
      }
      this.endArray = array
      console.log(this.endArray)
      

    })
  }

}
