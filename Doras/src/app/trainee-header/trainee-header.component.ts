import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trainee-header',
  templateUrl: './trainee-header.component.html',
  styleUrls: ['./trainee-header.component.css']
})
export class TraineeHeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  band = this.http.get<string[]>('/api/getBand');

  ngOnInit() {
  }

}
