
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Capability } from './models/capability'
import { JobFamily } from './models/jobFamily'
import { JobRole } from './models/jobRole'
import { Band } from './models/Band'
import { Observable } from 'rxjs'
import { Job } from './models/job'
import { CapabilityLeads} from './models/capabilityLeads'
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getCapabilities(): Observable<Capability[]> {
    return this.http.get<Capability[]>('/api/getCapabilities');
  }

  public getCapabilityLeads(): Observable<CapabilityLeads[]>{
    return this.http.get<CapabilityLeads[]>('/api/getCapLeads');
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
    console.log('post')
    return this.http.post('/api/newCapability', newCapability);
  }

  public getDistinctCapLeads(): Observable<CapabilityLeads[]> {
    return this.http.get<CapabilityLeads[]>('/api/getDistinctCapLeads');
  }

}
