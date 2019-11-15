import { Injectable } from '@angular/core';
import { Capability } from './models/capability';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private capability: Capability | null;
  constructor() { }

  setCapability(capability: Capability) {
    this.capability = capability;
  }

  getCapability() {
    return this.capability
  }
}
