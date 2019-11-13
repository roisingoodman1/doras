import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { JobFamily } from '../models/jobFamily';
import { CapabilityLeads } from '../models/capabilityLeads';
import { Capability } from '../models/capability';

@Component({
  selector: 'app-add-capability',
  templateUrl: './add-capability.component.html',
  styleUrls: ['./add-capability.component.css']
})
export class AddCapabilityComponent implements OnInit {
  public jobFams: JobFamily[];
  public capLeads: CapabilityLeads[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getJobFamily().subscribe((c) => {
      this.jobFams = c;
    });

    this.data.getDistinctCapLeads().subscribe((c) => {
      this.capLeads = c;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.data.newCapability(form.form.value).subscribe((c) => {
      });
    }

  }

}
