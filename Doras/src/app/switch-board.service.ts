import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Capability } from './models/capability';
import { JobFamily } from './models/jobFamily';
import { Job } from './models/job';

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

  constructor() { }
}
