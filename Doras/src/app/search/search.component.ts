import { Component, OnInit } from '@angular/core';
import { JobRole } from '../models/jobRole';
import { DataService } from '../data.service';
import { Band } from '../models/Band';
import { Job } from '../models/job';
import { Title } from '@angular/platform-browser';
import { SwitchBoardService } from '../switch-board.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  titles: JobRole[];
  bandList: Band[] = [];
  div: HTMLElement;
  data: DataService;
  thisTitle:Title;
  switchboard: SwitchBoardService;
  thisJob:Job;

  constructor(data: DataService, switchboardService: SwitchBoardService) { 
  this.data = data;
  this.switchboard = switchboardService;
    
  
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
  onSelect (newJob: Job): void {
     this.thisJob =newJob;
     this.switchboard.switchJob(newJob);
  }
  
  ngOnInit() {
  
  }




  

}
