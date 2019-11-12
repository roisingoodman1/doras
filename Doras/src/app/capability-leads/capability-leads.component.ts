import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataTransferService } from '../data-transfer.service'
import { Capability } from '../models/capability';
import { CapabilityLeads } from '../models/capabilityLeads';

@Component({
  selector: 'app-capability-leads',
  templateUrl: './capability-leads.component.html',
  styleUrls: ['./capability-leads.component.css']
})
export class CapabilityLeadsComponent implements OnInit {
  public capabilityLeads: CapabilityLeads[];

  get capability(): Capability | null {
    return this.dataTransferService.capability;
}

  constructor(private data: DataService, private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.data.getCapabilityLeads().subscribe(c => {
      this.capabilityLeads = c
    });
  }

}
