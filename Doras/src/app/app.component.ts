import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from './test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  tests = this.http.get<Test[]>('/api/test');

}
