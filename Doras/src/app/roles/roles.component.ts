import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource, NgbSlideEventDirection, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { Band } from '../models/Band';
import { DataTransferService } from '../data-transfer.service';
import { Capability } from '../models/capability';
import { Job } from '../models/job';
import { ResponsibilitiesComponent } from '../responsibilities/responsibilities.component'
import { MatDialog } from '@angular/material/dialog';
import { SpecificationComponent } from '../specification/specification.component';
import { TrainingPopupComponent } from '../training-popup/training-popup.component';
import { Training } from '../models/training';
import { Competency } from '../models/Competency';
import { BandCompetenciesComponent } from '../band-competencies/band-competencies.component';
import { OtherJobsComponent } from '../other-jobs/other-jobs.component'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  div: HTMLElement;
  public bands: Band[];
  public jobBandArray: any[];
  public pageCount = 0;
  public firstJob: Job[] = [];
  public secondJob: Job[];
  public thirdJob: Job[];
  public firstTraining: Training[];
  public secondTraining: Training[];
  public thirdTraining: Training[];
  public firstCompetency: Competency[];
  public secondCompetency: Competency[];
  public thirdCompetency: Competency[];
  public firstSameJob: Job[];
  public secondSameJob: Job[];
  public thirdSameJob: Job[];
  public cap: Capability;

  constructor(private data: DataService, private dataTransferService: DataTransferService, public dialog: MatDialog, private config: NgbCarouselConfig) {
  }

  open(data: any[], component: any): void {
    this.dialog.open(component, {
      data: { data: data }
    });
  }

  ngOnInit() {
    this.cap = this.dataTransferService.getCapability();
    this.initialise(true)
  }

  onSlide(slideEvent: NgbSlideEvent) {

    if (slideEvent.source === NgbSlideEventSource.ARROW_LEFT) {
      if (this.pageCount === 0) {
        this.pageCount = 2;
      } else {
        this.pageCount--;
      }
    } else if (slideEvent.source === NgbSlideEventSource.ARROW_RIGHT) {
      if (this.pageCount === 2) {
        this.pageCount = 0;
      } else {
        this.pageCount++;
      }
    }
    this.initialise(false)
}

initialise(first: boolean) {
  if(first){
    this.data.getBand().subscribe(c => {
      this.bands = c.reverse();
      const tempArray: any[] = [];
      const step = 3;
      let nextSplitValue: number;
      const length: number = this.bands.length;

      for (let i = 0; i < length; i += step) {
        nextSplitValue = i + 3;
        tempArray.push(this.bands.slice(i, nextSplitValue));
      }

      this.jobBandArray = tempArray;
      this.loadPage();

    });
  } else {
  this.loadPage();
  }
}

loadPage() {
  console.log(this.cap)
  this.data.getJobRole(this.cap.capId, this.jobBandArray[this.pageCount][0].bandId).subscribe(c => {
    this.firstJob = c;
    if (!this.firstJob[0]) {
      this.firstJob.push(null);
    } else {
      this.data.getTrainingByJid(this.firstJob[0].jid).subscribe(c => {
        this.firstTraining = c;
      })
    }
  })

  this.data.getJobRole(this.cap.capId, this.jobBandArray[this.pageCount][1].bandId).subscribe(c => {
    this.secondJob = c;
    if (!this.secondJob[0]) {
      this.secondJob.push(null);
    } else {
    this.data.getTrainingByJid(this.secondJob[0].jid).subscribe(c => {
      this.secondTraining = c;
    })
  }
})
  this.data.getJobRole(this.cap.capId, this.jobBandArray[this.pageCount][2].bandId).subscribe(c => {
    this.thirdJob = c;
    if (!this.thirdJob[0]) {
      this.thirdJob.push(null);
    } else {
    this.data.getTrainingByJid(this.thirdJob[0].jid).subscribe(c => {
      this.thirdTraining = c;
    })
  }
})
  this.data.getCompetenciesBand(this.jobBandArray[this.pageCount][0].bandId).subscribe(c => {
    this.firstCompetency = c;
  })

  this.data.getCompetenciesBand(this.jobBandArray[this.pageCount][1].bandId).subscribe(c => {
    this.secondCompetency = c;
  })

  this.data.getCompetenciesBand(this.jobBandArray[this.pageCount][2].bandId).subscribe(c => {
    this.thirdCompetency = c;
  })
  this.data.getJobOnBand(this.jobBandArray[this.pageCount][0].bandId).subscribe(c => {
    this.firstSameJob = c;

  })

  this.data.getJobOnBand(this.jobBandArray[this.pageCount][1].bandId).subscribe(c => {
    this.secondSameJob = c;
  })

  this.data.getJobOnBand(this.jobBandArray[this.pageCount][2].bandId).subscribe(c => {
    this.thirdSameJob = c;
  })
}

  openDialog(component: string, type: string) {
    switch (component) {
      case "responsibility":
        switch (type) {
          case "job1":
            this.open(this.firstJob, ResponsibilitiesComponent);
            break;
          case "job2":
            this.open(this.secondJob, ResponsibilitiesComponent);
            break;
          case "job3":
            this.open(this.thirdJob, ResponsibilitiesComponent);
            break;
        }
        break;
      case "training":
          switch (type) {
            case "training1":
              this.open(this.firstTraining, TrainingPopupComponent);
              break;
            case "training2":
              this.open(this.secondTraining, TrainingPopupComponent);
              break;
            case "training3":
              this.open(this.thirdTraining, TrainingPopupComponent);
              break;
          }
        break;
      case "spec":
          switch (type) {
            case "spec1":
              this.open(this.firstJob, SpecificationComponent);
              break;
            case "spec2":
              this.open(this.secondJob, SpecificationComponent);
              break;
            case "spec3":
              this.open(this.thirdJob, SpecificationComponent);
              break;
          }
        break;
      case "bandComp":
          switch (type) {
            case "band1":
              this.open(this.firstCompetency, BandCompetenciesComponent);
              break;
            case "band2":
              this.open(this.secondCompetency, BandCompetenciesComponent);
              break;
            case "band3":
              this.open(this.thirdCompetency, BandCompetenciesComponent);
              break;
          }
        break;
      case "sameBand":
        switch (type) {
          case "band1":
            this.open(this.firstSameJob, OtherJobsComponent);
            break;
          case "band2":
            this.open(this.secondSameJob, OtherJobsComponent);
            break;
          case "band3":
            this.open(this.thirdSameJob, OtherJobsComponent);
            break;
        }
      break;
    }
  }
}
