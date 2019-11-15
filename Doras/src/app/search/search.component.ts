import { Component, OnInit } from '@angular/core';
import { JobRole } from '../models/jobRole';
import { DataService } from '../data.service';
import { Band } from '../models/Band'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  titles: JobRole[];
  bandList: Band[] = [];
  div: HTMLElement;
  constructor(data: DataService) {
    data.getJobTitles().subscribe(c=>{
      this.titles = c;
      c.forEach(job => {
        if (!this.bandList[job.bandId]){
          data.getBandById(job.bandId).subscribe(c1 => {
            this.bandList[job.bandId] = c1[0].bandName;
          })
        }
      });
    });

  }

  onSelect(title){

  }
}
