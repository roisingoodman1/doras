import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { Band } from '../models/Band';
import { DataTransferService } from '../data-transfer.service'
import { Capability } from '../models/capability';
import { Job } from '../models/job';
import { ResponsibilitiesComponent } from '../responsibilities/responsibilities.component'
import { SwitchBoardService } from '../switch-board.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers: [ResponsibilitiesComponent]
})
export class RolesComponent implements OnInit {
  public bands: Band[];
  public jobBandArray: any[];
  public pageCount: number = 0;
  public firstJob: Job[];
  public secondJob: Job[];
  public thirdJob: Job[];

  get capability(): Capability | null {
    return this.dataTransferService.capability;
}

  constructor(private data: DataService, private dataTransferService : DataTransferService, private responsibilities: ResponsibilitiesComponent, private switchBoard: SwitchBoardService) { }

  ngOnInit() {
    this.data.getBand().subscribe(c => {
      this.bands = c.reverse();

      let tempArray: any[] = [];
      let step: number = 3;
      let nextSplitValue: number;
      let length: number = this.bands.length;
      for (let i = 0; i < length; i+=step) {
        nextSplitValue = i + 3;
        tempArray.push(this.bands.slice(i, nextSplitValue));
      }
      this.jobBandArray = tempArray;
    })
  }

  onSlide(slideEvent: NgbSlideEvent){
     if (slideEvent.source === NgbSlideEventSource.ARROW_LEFT){
        if (this.pageCount === 0) {
          this.pageCount = 2;
        } else {
          this.pageCount--;
        }
    } else if ( slideEvent.source === NgbSlideEventSource.ARROW_RIGHT) {
      if (this.pageCount === 2) {
        this.pageCount = 0;
      } else {
        this.pageCount++;
      }
    }

    this.data.getJobRole(this.capability.capId, this.jobBandArray[this.pageCount][0].bandId).subscribe(c => {
      this.firstJob = c;
      if (!this.firstJob[0]) {
        this.firstJob.push(null);
      }
    })

    this.data.getJobRole(this.capability.capId, this.jobBandArray[this.pageCount][1].bandId).subscribe(c => {
      this.secondJob = c;
      if (!this.secondJob[0]) {
        this.secondJob.push(null);
      }
  })
    this.data.getJobRole(this.capability.capId, this.jobBandArray[this.pageCount][2].bandId).subscribe(c => {
      this.thirdJob = c;
      if (!this.thirdJob[0]) {
        this.thirdJob.push(null);
      }
  })
}

private subscribeAndOpenResponsibility(job) {
  this.switchBoard.getJob(job);
  this.responsibilities.openResponsibilites();
}

openFirstResponsibility() {
  this.subscribeAndOpenResponsibility(this.firstJob)
}

openSecondResponsibility() {
  this.subscribeAndOpenResponsibility(this.secondJob)
}

openThirdResponsibility() {
  this.subscribeAndOpenResponsibility(this.thirdJob)
}

}
