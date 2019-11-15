import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Capability } from './models/capability';
import { JobFamily } from './models/jobFamily';
import { Job } from './models/job';
import { Competency } from './models/Competency';

@Injectable({
  providedIn: 'root'
})
export class SwitchBoardService {
  public capabilityWatcher = new Subject<Capability[]>();
  public capability$ = this.capabilityWatcher.asObservable();

  public getCapability(capability: Capability[]) {
      this.capabilityWatcher.next(capability);
  }

  public jobWatcher = new Subject<Job[]>();
  public job$ = this.jobWatcher.asObservable();

  public getJob(job: Job[]) {
    this.jobWatcher.next(job);
  }

  public bandWatcher = new Subject<any[]>();
  public band$ = this.bandWatcher.asObservable();

  public getBand(band: any[]) {
    this.bandWatcher.next(band);
  }

  public otherBandWatcher = new Subject<any[]>();
  public otherBand$ = this.otherBandWatcher.asObservable();

  public getOtherBand(otherBand: any[]) {
    this.otherBandWatcher.next(otherBand);
  }


  constructor() { }
}
