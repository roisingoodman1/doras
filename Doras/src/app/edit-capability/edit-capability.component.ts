import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Capability } from '../models/capability';
import { JobFamily } from '../models/jobFamily';
import { CapabilityLead } from '../models/capabilityLead';

@Component({
  selector: 'app-edit-capability',
  templateUrl: './edit-capability.component.html',
  styleUrls: ['./edit-capability.component.css']
})
export class EditCapabilityComponent implements OnInit {
  public capabilities: Capability[];
  public jobFams: JobFamily[];
  public capLeads: CapabilityLead[];
  public cap: Capability = new Capability();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCapabilities().subscribe((c) => {
      this.capabilities = c;
    });

    this.data.getJobFamily().subscribe((c) => {
      this.jobFams = c;
    });

    this.data.getDistinctCapLeads().subscribe((c) => {
      this.capLeads = c;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.data.editCapability(this.cap).subscribe();
      window.location.reload();
    }
  }

  onChange(capId) {
    this.data.getCapabilityById(capId).subscribe((c) => {
      this.cap = c[0];
    });
  }

}
