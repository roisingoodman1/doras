import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Capability } from './models/capability'
import { JobFamily } from './models/jobFamily'
import { JobRole } from './models/jobRole'
import { Band } from './models/Band'
import { Observable } from 'rxjs'
import { Job } from './models/job'
import { Competency } from './models/Competency'
import { Training } from './models/training'
import { CapabilityLead} from './models/capabilityLead'
import { User } from './models/user';
import { SplitInterpolation } from '@angular/compiler';

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
    return this.http.get<JobFamily[]>('api/distinctJobFamilies');
  }

  public getJobRole(): Observable<Job[]> {
    return this.http.get<Job[]>('api/jobs');
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

  public login(username, password) {
    return this.http.post('/api/login/', {username, password});
  }

  public authenticate(token) {
    return this.http.post('/api/authenticate/', {token});
  }

  public getJobOnBand(bandId): Observable<Job[]> {
    return this.http.get<Job[]>('/api/jobByBandId/?bandId=' + bandId)
  }

  public newCapability(newCapability) {
    console.log('post')
    return this.http.post('/api/newCapability', newCapability);
  }

  public getDistinctCapLeads(): Observable<CapabilityLead[]> {
    return this.http.get<CapabilityLead[]>('/api/getDistinctCapLeads');
  }

}

