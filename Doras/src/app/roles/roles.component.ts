import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { Band } from '../models/Band';
import { DataTransferService } from '../data-transfer.service'
import { Capability } from '../models/capability';
import { Job } from '../models/job';
import { ResponsibilitiesComponent } from '../responsibilities/responsibilities.component'
import { SwitchBoardService } from '../switch-board.service';
import { MatDialog } from '@angular/material/dialog';


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

  constructor(private data: DataService, private dataTransferService : DataTransferService,  public dialog: MatDialog) { }

  openDialog(job: Job[]): void {
    this.dialog.open(ResponsibilitiesComponent, {
      data: { responsibility: job[0].responsibilities != " " ? job[0].responsibilities : "No responsibilities" }
    });
  }

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

  openFirstResponsibility() {
    this.openDialog(this.firstJob)
  }

  openSecondResponsibility() {
    this.openDialog(this.secondJob)
  }

  openThirdResponsibility() {
    this.openDialog(this.thirdJob)
  }

}
