import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { Job } from '../models/job';
import { ResponsibilitiesComponent } from '../responsibilities/responsibilities.component'
import { MatDialog } from '@angular/material/dialog';
import { SpecificationComponent } from '../specification/specification.component';
import { TrainingPopupComponent } from '../training-popup/training-popup.component';
import { Training } from '../models/training';
import { Competency } from '../models/Competency';
import { BandCompetenciesComponent } from '../band-competencies/band-competencies.component';
import { OtherJobsComponent } from '../other-jobs/other-jobs.component'
import { SwitchBoardService } from '../switch-board.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public pageCount = 0;
  public jobBandArray: any[];
  public jobRole: any[];
  public otherBands: any[];
  public firstCompetency: Competency[];
  public secondCompetency: Competency[];
  public thirdCompetency: Competency[];
  public firstTraining: Training[];
  public secondTraining: Training[];
  public thirdTraining: Training[];

  constructor(private data: DataService, private switchBoard: SwitchBoardService, public dialog: MatDialog, private config: NgbCarouselConfig) {
  }

  open(data: any[], component: any): void {
    this.dialog.open(component, {
      data: { data: data }
    });
  }
  subJobRole: Subscription
  subBand: Subscription
  subOtherBand: Subscription
  subFirstComp: Subscription
  ngOnInit() {
    this.subJobRole = this.switchBoard.job$.subscribe((c) => {
      this.jobRole = c;
    });

    this.subBand = this.switchBoard.band$.subscribe((c) => {
      this.jobBandArray = c;
    });

    this.subOtherBand = this.switchBoard.otherBand$.subscribe((c) => {
      this.otherBands = c;
    });

    this.data.getCompetenciesBand(9).subscribe(c => {
      this.firstCompetency = c;
    })

    this.data.getCompetenciesBand(8).subscribe(c => {
      this.secondCompetency = c;
    })

    this.data.getCompetenciesBand(7).subscribe(c => {
      this.thirdCompetency = c;
    })

    this.data.getTrainingByJid(9).subscribe(c => {
      this.firstTraining = c;
    })

    this.data.getTrainingByJid(8).subscribe(c => {
      this.secondTraining = c;
    })

    this.data.getTrainingByJid(7).subscribe(c => {
      this.thirdTraining = c;
    })
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
    this.data.getCompetenciesBand(this.jobBandArray[this.pageCount][0].bandId).subscribe(c => {
      this.firstCompetency = c;
    })

    this.data.getCompetenciesBand(this.jobBandArray[this.pageCount][1].bandId).subscribe(c => {
      this.secondCompetency = c;
    })

    this.data.getCompetenciesBand(this.jobBandArray[this.pageCount][2].bandId).subscribe(c => {
      this.thirdCompetency = c;
    })

    this.data.getTrainingByJid(this.jobRole[this.pageCount][0].jid).subscribe(c => {
      this.firstTraining = c;
    })

    this.data.getTrainingByJid(this.jobRole[this.pageCount][1].jid).subscribe(c => {
      this.secondTraining = c;
    })

    this.data.getTrainingByJid(this.jobRole[this.pageCount][2].jid).subscribe(c => {
      this.thirdTraining = c;
    })
}



  openDialog(component: string, type: string) {
    switch (component) {
      case "responsibility":
        switch (type) {
          case "job1":
            this.open(this.jobRole[this.pageCount][0], ResponsibilitiesComponent);
            break;
          case "job2":
            this.open(this.jobRole[this.pageCount][1], ResponsibilitiesComponent);
            break;
          case "job3":
            this.open(this.jobRole[this.pageCount][2], ResponsibilitiesComponent);
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
              this.open(this.jobRole[this.pageCount][0], SpecificationComponent);
              break;
            case "spec2":
              this.open(this.jobRole[this.pageCount][1], SpecificationComponent);
              break;
            case "spec3":
              this.open(this.jobRole[this.pageCount][2], SpecificationComponent);
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
            this.open(this.otherBands[this.pageCount][0], OtherJobsComponent);
            break;
          case "band2":
            this.open(this.otherBands[this.pageCount][1], OtherJobsComponent);
            break;
          case "band3":
            this.open(this.otherBands[this.pageCount][2], OtherJobsComponent);
            break;
        }
      break;
    }
  }
}
