import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataTransferService } from '../data-transfer.service';
import { JobRole } from '../models/jobRole';


@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css']
})
export class ComparePageComponent implements OnInit {

  constructor(private data: DataService) { }

  hideTable : boolean = true;
  jobList : JobRole[];
  job1 : any = {
    selected: false,
    family: "",
    title: "",
    summary: "",
    competencies: "",
    responsibilities: "",
    band: "",
    training: ""
  }
  job2 : any = {
    selected: false,
    family: "",
    title: "",
    summary: "",
    competencies: "",
    responsibilities: "",
    band: "",
    training: ""
  }

  ngOnInit() {
    this.data.getJobRoles().subscribe(c => {
      this.jobList = c;
    })
  }

  onJob1Click(jobid : number){
    this.job1.selected = true;
    this.hideTable = (!this.job1.selected && !this.job2.selected)
    var tmpjob = this.jobList[jobid];
    this.job1.title = tmpjob.title;
    this.job1.summary = tmpjob.summary;
    this.job1.responsibilities = tmpjob.responsibilities;

  }

  onJob2Click(jobid : number){
    this.job2.selected = true;
    this.hideTable = (!this.job1.selected && !this.job2.selected)
    var tmpjob = this.jobList[jobid];
    this.job2.title = tmpjob.title;
    this.job2.summary = tmpjob.summary;
    this.job2.responsibilities = tmpjob.responsibilities;

  }
}
