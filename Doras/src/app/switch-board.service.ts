import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Capability } from './models/capability';
import { JobFamily } from './models/jobFamily';

@Injectable({
  providedIn: 'root'
})
export class SwitchBoardService {
  public capabilityWatcher = new Subject<Capability[]>();
  public capability$ = this.capabilityWatcher.asObservable();

  public getCapability(capability: Capability[]) {
    // if (capability) {
      this.capabilityWatcher.next(capability);
    // }
  }


  constructor() { }
}
