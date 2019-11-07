// our root app component
import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { DataService } from '../data.service';
import { JobFamily } from '../models/jobFamily';
import { JobRole } from '../models/jobRole';
import { Capability } from '../models/capability';

@Component({
    selector: 'app-doras-compare',
    templateUrl: './compare.component.html',
    styleUrls: ['./compare.component.css'],
})
export class CompareComponent implements OnInit {
  private capabilities: Capability[]
  private jobFamilies: JobFamily[]
  private jobRoles: JobRole[]

  constructor(private data: DataService) { }

  async ngOnInit(): Promise<void> {
    this.capabilities = await this.data.getCapabilities()
    this.jobRoles = await this.data.getJobRoles()
  }

  private async firstDropDownChanged(idx: number) {
    if (!this.capabilities) { return; }

    this.jobFamilies = await this.data.getJobFamilies(idx)
  }
}
