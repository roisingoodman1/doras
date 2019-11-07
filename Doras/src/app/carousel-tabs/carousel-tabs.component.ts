import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'doras-carousel-tabs',
  templateUrl: './carousel-tabs.component.html',
  styleUrls: ['./carousel-tabs.component.css'],
})
export class CarouselTabsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  capabilities = this.http.get<string[]>('/api/getCapabilities');


  ngOnInit() {
  }
}
