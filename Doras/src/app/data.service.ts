import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capability } from './models/capability';
import { JobFamily } from './models/jobFamily';
import { JobRole } from './models/jobRole';
import { Band } from './models/Band';
import { Observable } from 'rxjs';
import { Job } from './models/job';
import { User } from './models/user';
import { Training } from './models/training';
import { Competency } from './models/Competency'
import { SplitInterpolation } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getCapabilities(): Observable<Capability[]> {
    return this.http.get<Capability[]>('/api/getCapabilities/');
  }

  public getJobFamily(): Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/getJobFamily/');
  }

  public getJobFamilyByCap(id): Observable<JobFamily> {
    return this.http.get<JobFamily>('/api/getJobFamilyByCap/' + id);
  }

  public getJobRoles(): Observable<JobRole[]> {
    return this.http.get<JobRole[]>('/api/getJobRoles/');
  }

  public getBand(): Observable<Band[]> {
    return this.http.get<Band[]>('/api/getBand/');
  }

  public getCapNameByJfId(id): Observable<Capability[]> {
    return this.http.get<Capability[]>('api/capabilities/?jobFamilyId=' + id);
  }

  public getDistinctJfids(): Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/getDistinct/');
  }

  public getJobRole(capId, bandId): Observable<Job[]> {
    return this.http.get<Job[]>('api/jobs/?capabilityId='+capId+'&'+'bandId='+bandId);
  }

  public getJobTitles(): Observable<JobRole[]> {
    return this.http.get<JobRole[]>('/api/getJobTitle');
  }

  public getUser(username): Observable<User> {
    return this.http.get<User>('/api/User/' + username);
  }

  public getCompetenciesBand(bandId): Observable<Competency[]> {
    return this.http.get<Competency[]>('/api/competencies/?bandId=' + bandId);
  }

  public getTrainingByJid(jId): Observable<Training[]> {
    return this.http.get<Training[]>('/api/trainingByJobId/?jobId=' + jId);
  }

  public getBandById(id): Observable<Band> {
    return this.http.get<Band>('/api/getBandById/' + id);
  }

}
