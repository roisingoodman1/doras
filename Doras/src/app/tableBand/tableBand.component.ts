import { Component, OnInit } from '@angular/core';
import { TableSlideNumberService } from './../table-slide-number.service'
import { DataService } from '../data.service';
import { Band } from '../models/Band';

@Component({
  selector: 'app-tableBand',
  templateUrl: './tableBand.component.html',
  styleUrls: ['./tableBand.component.css']
})
export class tableBandComponent implements OnInit {
  public band: Band[];

  get slideNo(): number | null {
    return this.slideService.currentSlide;
  }

  constructor(private slideService: TableSlideNumberService, private data: DataService) { }

  slideNumber = this.slideNo;

  // setSlide(): [][] {

  //   console.log('headings');
  //   return headings
  // }


  ngOnInit() {
    this.data.getBand().subscribe(c => {
      this.band = c;
    });
    console.log()
    let headings: [][]
    var i, j, temparray, chunk = 3;
    for (i = 0, j = this.band.length; i < j; i += chunk) {
      temparray = this.band.slice(i, i + chunk);
      headings.push(temparray);
    }
  }

}
