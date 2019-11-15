import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Job } from '../models/job';
import { Capability } from '../models/capability';
import { Band } from '../models/Band';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  public capabilities: Capability[];
  public jobs: Job[];
  public bands: Band[];
  public job: Job = new Job();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCapabilities().subscribe((c) => {
      this.capabilities = c;
      console.log(this.capabilities)
    });

    this.data.getJobRoles().subscribe((c) => {
      this.jobs = c;
    });

    this.data.getBand().subscribe((c) => {
      this.bands = c;
      console.log(this.bands)
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.data.editJob(this.job).subscribe();
      window.location.reload();
    }
  }

  onChange(jId) {
    this.data.getJobById(jId).subscribe((c) => {
      this.job = c;
    });
  }

}
