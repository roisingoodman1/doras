import { Component, OnInit } from '@angular/core';
import { JobFamily } from '../models/jobFamily';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-job-family',
  templateUrl: './delete-job-family.component.html',
  styleUrls: ['./delete-job-family.component.css']
})
export class DeleteJobFamilyComponent implements OnInit {
  public jobfamily: JobFamily[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getJobFamily().subscribe(c => {
      this.jobfamily = c;
      console.log(c);
    })
  }

  onSubmit(form: NgForm) {
    this.data.deleteJobFamily(form.value.jf).subscribe((c) => {
    })
  }
}
