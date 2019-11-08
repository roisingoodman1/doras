import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { Band } from '../models/Band';
import { DataTransferService } from '../data-transfer.service'
import { Capability } from '../models/capability';
import { Job } from '../models/job';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public bands: Band[];
  public endArray: any[];
  public count: number = 0;
  public jobs1: Job[];
  public jobs2: Job[];
  public jobs3: Job[];
  public job1Title;
  public job2Title;
  public job3Title;

  get capability(): Capability | null {
    return this.dataTransferService.capability;
}

  constructor(private data: DataService, private dataTransferService : DataTransferService) { }

  ngOnInit() {
    this.data.getBand().subscribe(c => {
      this.bands = c.reverse();

      let newArray = [];
      let chunkOfArray = 3;
      let nextValue;
      let length = this.bands.length;
      for (let i = 0; i < length; i+=chunkOfArray) {
        nextValue = i + 3;
        newArray.push(this.bands.slice(i, nextValue));
      }
      this.endArray = newArray;
    })
  }

  onSlide(slideEvent: NgbSlideEvent){
     if (slideEvent.source === NgbSlideEventSource.ARROW_LEFT){
        if (this.count === 0) {
          this.count = 2;
        } else {
          this.count--;
        }
    } else if ( slideEvent.source === NgbSlideEventSource.ARROW_RIGHT) {
      if (this.count === 2) {
        this.count = 0;
      } else {
        this.count++;
      }
    }

    this.data.getJobRoleTitle(this.capability.capId, this.endArray[this.count][0].bandId).subscribe(c => {
      this.jobs1 = c;
      let obj = {};
      this.jobs1.forEach(item => obj[item.bandId] = item.title);
      this.job1Title = Object.values(obj)[0];
    })

    this.data.getJobRoleTitle(this.capability.capId, this.endArray[this.count][1].bandId).subscribe(c => {
      this.jobs2 = c;
      let obj = {};
      this.jobs2.forEach(item => obj[item.bandId] = item.title);
      this.job2Title = Object.values(obj)[0];
  })
    this.data.getJobRoleTitle(this.capability.capId, this.endArray[this.count][2].bandId).subscribe(c => {
      this.jobs3 = c;
      let obj = {};
      this.jobs3.forEach(item => obj[item.bandId] = item.title);
      this.job3Title = Object.values(obj)[0];
  })
}
}
