
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Capability } from './models/capability'
import { JobFamily } from './models/jobFamily'
import { JobRole } from './models/jobRole'
import { Band } from './models/Band'
import { Observable } from 'rxjs'
import { Job } from './models/job'
import { CapabilityLead } from './models/capabilityLead'
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getCapabilities(): Observable<Capability[]> {
    return this.http.get<Capability[]>('/api/getCapabilities');
  }

  public getCapabilityLeads(): Observable<CapabilityLead[]>{
    return this.http.get<CapabilityLead[]>('/api/getCapLeads');
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

  public getDistinctJfids(): Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/getDistinct');
  }

  public getJobRole(capId, bandId): Observable<Job[]> {
    return this.http.get<Job[]>('/api/getJobRoleTitle/' + capId + '/' + bandId);
  }

  public getUser(username): Observable<User> {
    return this.http.get<User>('/api/getUser/' + username);
  }

  public newCapability(newCapability) {
    return this.http.post('/api/newCapability', newCapability);
  }

  public getDistinctCapLeads(): Observable<CapabilityLead[]> {
    return this.http.get<CapabilityLead[]>('/api/getDistinctCapLeads');
  }

  public deleteCapability(capId) {
    return this.http.delete('/api/deleteCapability/' + capId);
  }

  public editCapability(updatedCap) {
    return this.http.put('/api/editCapability', updatedCap);
  }

  public editJobFamily(updatedJf) {
    return this.http.put('/api/editJobFamily', updatedJf);
  }

  public getCapabilityById(capId) {
    return this.http.get<Capability[]>('/api/getCapability/' + capId);
  }

  public getJobFamilyById(jfid) {
    return this.http.get<JobFamily>('/api/getJobFamilyByID/' + jfid);
  }

  public getJobRolesByCapId(capId) {
    return this.http.get<Job[]>('/api/getJobRolesByCapId?capId=' + capId);
  }

}
