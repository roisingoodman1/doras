import { Injectable } from '@angular/core';
import { Capability } from './models/capability';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  capability: Capability | null;
  constructor() { }
}
