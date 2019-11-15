import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { JobRole } from '../models/jobRole';
import { Job } from '../models/job';


@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css']
})
export class ComparePageComponent implements OnInit {

  constructor(private data: DataService) {
    this.data.getJobRoles().subscribe(c => {
      this.jobList = c;
    })
   }

  jobList : Job[];
  bandList: string[] = [];
  bandsGenerated: boolean = false;

  job1 : any = {
    selected: false,
    family: "",
    title: "",
    summary: "",
    competencies: [],
    responsibilities: "",
    band: "",
    training: []
  }
  job2 : any = {
    selected: false,
    family: "",
    title: "",
    summary: "",
    competencies: [],
    responsibilities: "",
    band: "",
    training: []
  }

  ngOnInit() {

  }

  onJob1Click(jobid : number){
    this.job1.selected = true;
    var tmpjob = this.jobList[jobid];
    this.job1.title = tmpjob.title;
    this.job1.summary = tmpjob.summary;
    this.job1.responsibilities = tmpjob.responsibilities;
    this.data.getBandById(tmpjob.bandId).subscribe(c => {
      this.job1.band = c[0].bandName;
    })
    this.data.getJobFamilyNameByCapID(tmpjob.capId).subscribe(c =>{
      this.job1.family = c[0].jobfamilytitle;
    })
    this.data.getCompetencyDetailsByjId(tmpjob.id).subscribe(c => {
      this.job1.competencies = c;
    })
    this.data.getTrainingDetailsByjId(tmpjob.id).subscribe(c => {
      this.job1.training = c;
    })
  }

  onJob2Click(jobid : number){
    this.job2.selected = true;
    var tmpjob = this.jobList[jobid];
    this.job2.title = tmpjob.title;
    this.job2.summary = tmpjob.summary;
    this.job2.responsibilities = tmpjob.responsibilities;
    this.data.getBandById(tmpjob.bandId).subscribe(c => {
      this.job2.band = c[0].bandName;
    })
    this.data.getJobFamilyNameByCapID(tmpjob.capId).subscribe(c =>{
      this.job2.family = c[0].jobfamilytitle;
    })
    this.data.getCompetencyDetailsByjId(tmpjob.id).subscribe(c => {
      this.job2.competencies = c;
    })
    this.data.getTrainingDetailsByjId(tmpjob.id).subscribe(c => {
      this.job2.training = c;
    })
  }

  onDropdownsClick(){
    if (!this.bandsGenerated){
      this.jobList.forEach(job => {
        if (!this.bandList[job.bandId]){
          this.data.getBandById(job.bandId).subscribe(c => {
            this.bandList[job.bandId] = c[0].bandName;
          })
        }
      });
      this.bandsGenerated = true;
    }
  }
}
