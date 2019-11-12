import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CapabilityLeads } from '../models/capabilityLeads';

@Component({
  selector: 'app-capability-leads',
  templateUrl: './capability-leads.component.html',
  styleUrls: ['./capability-leads.component.css']
})
export class CapabilityLeadsComponent implements OnInit {
  public capabilityLeads: CapabilityLeads[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCapabilityLeads().subscribe(c => {
      this.capabilityLeads = c
    });
  }

}
