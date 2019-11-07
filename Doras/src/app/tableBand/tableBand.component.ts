import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Band } from '../models/Band';

@Component({
  selector: 'app-tableBand',
  templateUrl: './tableBand.component.html',
  styleUrls: ['./tableBand.component.css']
})
export class tableBandComponent implements OnInit {
  public bands: Band[];

  constructor(private data: DataService) { }


  ngOnInit() {
    this.data.getBand().subscribe(c => {
      this.bands = c;
      this.bands = (this.bands.reverse()).slice(0, 3)
    });
  }

}
