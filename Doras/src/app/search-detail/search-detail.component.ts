import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Job } from '../models/job';
import { SwitchBoardService } from '../switch-board.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})


export class SearchDetailComponent implements OnInit {

  @Input() job: Job;
  switchboard: SwitchBoardService;

  constructor(switchboard: SwitchBoardService) { 
    this.switchboard = switchboard;
  }

  subJob: Subscription;
  ngOnInit(): void {
    this.subJob = this.switchboard.singlejob$.subscribe((c) => {
      this.job = c;
    });
  }

  ngOnDestroy(): void {
    this.subJob.unsubscribe();
  }

}
