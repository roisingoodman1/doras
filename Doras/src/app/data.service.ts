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
import { Training } from './models/training';
import { Competency } from './models/Competency'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getCapabilities(): Observable<Capability[]> {
    return this.http.get<Capability[]>('/api/capabilities');
  }

  public getCapabilityLeads(): Observable<CapabilityLead[]>{
    return this.http.get<CapabilityLead[]>('/api/getCapLeads');
  }

  public getJobFamily(): Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/jobFamily');
  }

  public getBand(): Observable<Band[]> {
    return this.http.get<Band[]>('/api/band');
  }

  public getCapNameByJfId(id): Observable<Capability[]> {
    return this.http.get<Capability[]>('api/capabilities/?jobFamilyId=' + id);
  }

  public getDistinctJfids(): Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('api/distinctJobFamilies');
  }

  public getJobRole(): Observable<Job[]> {
    return this.http.get<Job[]>('api/jobs');
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

  public newCapability(newCapability) {
    return this.http.post('/api/capabilities', newCapability);
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

  public getCapabilityById(capId) {
    return this.http.get<Capability[]>('/api/getCapability/' + capId);
  }

  public getJobRolesByCapId(capId) {
    return this.http.get<Job[]>('/api/getJobRolesByCapId?capId=' + capId);
  }

  public login(username, password) {
    return this.http.post('/api/login/', {username, password});
  }

  public authenticate(token) {
    return this.http.post('/api/authenticate/', {token});
  }

  public getJobOnBand(bandId): Observable<Job[]> {
    return this.http.get<Job[]>('/api/jobByBandId/?bandId=' + bandId)
  }

}

