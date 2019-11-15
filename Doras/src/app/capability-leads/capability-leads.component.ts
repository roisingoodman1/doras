import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataTransferService } from '../data-transfer.service'
import { Capability } from '../models/capability';
import { CapabilityLead } from '../models/capabilityLead';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-capability-leads',
  templateUrl: './capability-leads.component.html',
  styleUrls: ['./capability-leads.component.css'],
  providers: [MatDialogModule]
})
export class CapabilityLeadsComponent implements OnInit {
  public capabilityLead: CapabilityLead[];

  get capability(): Capability | null {
    return this.dataTransferService.getCapability();
}

  constructor(private data: DataService, private dataTransferService: DataTransferService, public dialogRef: MatDialogRef<CapabilityLeadsComponent>) {
   }

  ngOnInit() {
    this.data.getCapabilityLeads().subscribe(c => {
      this.capabilityLead = c
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
