import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Capability } from './models/capability'
import { JobFamily } from './models/jobFamily'
import { JobRole } from './models/jobRole'
import { Band } from './models/Band'
import { Observable } from 'rxjs'
import { Job } from './models/job'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getCapabilities(): Observable<Capability[]> {
    return this.http.get<Capability[]>('/api/getCapabilities');
  }

  public getJobFamily(): Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/getJobFamily');
  }

  public getJobFamilyByCap(id): Observable<JobFamily> {
    return this.http.get<JobFamily>('/api/getJobFamilyByCap/' + id);
  }

  public getJobRoles(): Observable<JobRole[]> {
    return this.http.get<JobRole[]>('/api/getJobRoles');
  }

  public getBand(): Observable<Band[]> {
    return this.http.get<Band[]>('/api/getBand');
  }

  public getCapNameByJfId(id): Observable<Capability[]> {
    return this.http.get<Capability[]>('/api/getCapNameByJfId/' + id);
  }

  public getBandById(id): Observable<Band> {
    return this.http.get<Band>('/api/getBandById/' + id);
  }

  public getJobFamilyNameByCapID(id): Observable<object> {
    return this.http.get<object>('api/getJobFamilyNameByCapID/' + id);
  }

  public getCompetencyDetailsByjId(id): Observable<string[]> {
    return this.http.get<string[]>('api/getCompetencyDetailsByjId/' + id);
  }

  public getTrainingDetailsByjId(id): Observable<string[]> {
    return this.http.get<string[]>('api/getTrainingDetailsByjId/' + id);
  }

  public getDistinctJfids(): Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/getDistinct');
  }

  public getJobRoleTitle(capId, bandId): Observable<Job[]> {
    return this.http.get<Job[]>('/api/getJobRoleTitle/' + capId + '/' + bandId);
  }

}
