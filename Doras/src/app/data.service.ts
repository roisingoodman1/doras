import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Capability } from './models/capability'
import { JobFamily } from './models/jobFamily'
import { JobRole } from './models/jobRole'
import { Band } from './models/Band'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getCapabilities(): Observable<Capability[]> {
    return this.http.get<Capability[]>('/api/getCapabilities');
  }

  public getJobFamily(): Promise<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/getJobFamily').toPromise();
  }

  public getJobFamilyByCap(id): Promise<JobFamily> {
    return this.http.get<JobFamily>('/api/getJobFamilyByCap/' + id).toPromise();
  }

  public getJobRoles(): Promise<JobRole[]> {
    return this.http.get<JobRole[]>('/api/getJobRoles').toPromise();
  }

  public getBand(): Promise<Band[]> {
    return this.http.get<Band[]>('/api/getBand').toPromise();
  }

  public getCapNameByJfId(id): Observable<Capability[]> {
    return this.http.get<Capability[]>('/api/getCapNameByJfId/' + id);
  }

}
