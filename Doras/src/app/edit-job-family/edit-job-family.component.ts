import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Capability } from '../models/capability';
import { JobFamily } from '../models/jobFamily';
import { CapabilityLead } from '../models/capabilityLead';

@Component({
  selector: 'app-edit-job-family',
  templateUrl: './edit-job-family.component.html',
  styleUrls: ['./edit-job-family.component.css']
})
export class EditJobFamilyComponent implements OnInit {
  jobfamily : JobFamily[];
  public jf : JobFamily = new JobFamily();

  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getJobFamily().subscribe(c => {
      this.jobfamily = c;
    })
  }

  onChange(jfid) {
    this.data.getJobFamilyById(jfid).subscribe(c => {
       this.jf = c[0];
    });
  }

  onSubmit(form: NgForm){
    if (form.valid) {
      console.log(this.jf.title);
      this.data.editJobFamily(this.jf).subscribe(c => {});
      window.location.reload();
    }
  }
}
