import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'doras-carousel-tabs',
  templateUrl: './carousel-tabs.component.html',
  styleUrls: ['./carousel-tabs.component.css'],
})
export class CarouselTabsComponent implements OnInit {

  constructor() { }

  tabs : string[] = [
    "Business Development",	"Account Management",	"Sales",	"Inside Sales Development",	"Pre Sales & Bid Management",	"Marketing"
  ];

  ngOnInit() {
  }

}
