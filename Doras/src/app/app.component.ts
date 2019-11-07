import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Band } from './models/Band';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  bands = this.getBand();
  getBand() {
    return this.http.get<Band[]>('/api/getBand');
  }

  getJobIdAndCapId() {
    return this.http.get<number[]>('/api/getJobIdAndCapId');
  }

  getBandId() {
    return this.http.get<number[]>('/api/getBandId');
  }

  getJobTitle() {
    return this.http.get<string[]>('/api/getJobTitle');
  }
}
