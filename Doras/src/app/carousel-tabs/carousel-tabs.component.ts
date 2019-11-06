import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { NgbTabset, NgbTab } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'doras-carousel-tabs',
  templateUrl: './carousel-tabs.component.html',
  styleUrls: ['./carousel-tabs.component.css'],
})
export class CarouselTabsComponent implements OnInit {
  tabs : string[] = ["Business Development",	"Account Management",	"Sales",	"Inside Sales Development",	"Pre Sales & Bid Management",	"Marketing"]

  constructor() { }
  
  ngOnInit() {
    this.setTabs(this.tabs)
  }

  public setTabs(tabs) : void {
    console.log(document.getElementsByClassName('doras-carousel-tabs')[0].childNodes.length)
    document.getElementsByClassName('doras-carousel-tabs')[0].childNodes[0].remove();
    console.log(document.getElementsByClassName('doras-carousel-tabs')[0].childNodes.length)
    const tabset = document.createElement('ngb-tabset') as NgElement & WithProperties<NgbTabset>;
    //tabset.justify = "center";
    document.getElementsByClassName('doras-carousel-tabs')[0].appendChild(tabset);
    const list = document.createElement('li');
    document.getElementsByClassName('doras-carousel-tabs')[0].childNodes[0].appendChild(list);
    console.log(document.getElementsByClassName('doras-carousel-tabs')[0].childNodes.length)
    tabs.forEach(tab => {
      const tabDOM = document.createElement('ngb-tab') as NgElement & WithProperties<NgbTab>;
      tabDOM.title = tab;
      document.getElementsByClassName('doras-carousel-tabs')[0].childNodes[0].childNodes[0].appendChild(tabDOM);
    });
  }
}
