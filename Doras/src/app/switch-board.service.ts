import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Capability } from './models/capability';
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

public singlejobWatcher = new Subject<Job>();
public singlejob$ = this.singlejobWatcher.asObservable();

  public getsingleJob(singlejob: Job) {
    this.singlejobWatcher.next(singlejob);
}

public switchJob(job: Job) {
  if (job) {
    console.log(job);
    this.singlejobWatcher.next(job);
  }
}

  constructor() { }
}
