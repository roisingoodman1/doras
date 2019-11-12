import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { SwitchBoardService } from '../switch-board.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-responsibilities',
  templateUrl: './responsibilities.component.html',
  styleUrls: ['./responsibilities.component.css']
})
export class ResponsibilitiesComponent implements OnInit {
  public job: Job[];

  constructor(private modalService: NgbModal, private switchBoard: SwitchBoardService) {
    
  }

  subJob: Subscription;
  openResponsibilites() {
    this.subJob = this.switchBoard.job$.subscribe((c) => {
      this.job = c;
    });
    this.click()
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  click() {
    let el: HTMLElement = document.getElementById('open') as HTMLElement;
    el.click()
  }

  unsubscribe() {
    this.subJob.unsubscribe();
  }

  ngOnInit() {
    this.subJob = this.switchBoard.job$.subscribe((c) => {
      this.job = c;
    });
  }

}

