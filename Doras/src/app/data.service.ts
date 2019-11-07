import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Capability } from './models/capability'
import { JobFamily } from './models/jobFamily'
import { JobRole } from './models/jobRole'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getCapabilities(): Promise<Capability[]> {
    return this.http.get<Capability[]>('/api/getCapabilities').toPromise()
  }

  public getJobFamilies(): Promise<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/getJobFamilies').toPromise()
  }

  public getJobFamilyByCap(id): Promise<JobFamily> {
    return this.http.get<JobFamily>('/api/getJobFamilyByCap/' + id).toPromise()
  }

  public getJobRoles(): Promise<JobRole[]> {
    return this.http.get<JobRole[]>('/api/getJobRoles').toPromise()
  }
}
