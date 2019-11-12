import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { JobFamily } from '../models/jobFamily';

@Component({
  selector: 'app-add-job-family',
  templateUrl: './add-job-family.component.html',
  styleUrls: ['./add-job-family.component.css']
})
export class AddJobFamilyComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.data.newJobFamily(form.form.value).subscribe((c) => {
      });
      form.form.reset();
    }

  }
}
