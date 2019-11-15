import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { JobFamily } from '../models/jobFamily';
import { Capability } from '../models/capability';
import { Band } from '../models/Band';
import { Job } from '../models/job';

@Component({
  selector: 'app-add-job-role',
  templateUrl: './add-job-role.component.html',
  styleUrls: ['./add-job-role.component.css']
})
export class AddJobRoleComponent implements OnInit {
  public bands: Band[];
  public capabilities: Capability[];
  public returnedJob: Job[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCapabilities().subscribe((c) => {
      this.capabilities = c;
    });

    this.data.getBand().subscribe((c) => {
      this.bands = c;
    });

  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value.bandId)
      console.log(1)
      this.data.getDuplicateJobs(form.value.bandId, form.value.capId).subscribe((c) => {
        console.log(2)
        this.returnedJob = c;
        console.log(this.returnedJob);
        if (this.returnedJob.length >= 1) {
          console.log(3)
          console.log("Initiate self-destruct" + c)
          form.resetForm();
          alert("This capability and band level already has a job, please select a different band or capability")
        } else {
          console.log(4)
          console.log("Delf-sestruct" + c)
          this.data.newJob(form.value).subscribe();
          form.resetForm();
        }
      })
      
    }

  }

}
