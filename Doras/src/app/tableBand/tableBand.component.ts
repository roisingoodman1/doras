import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Band } from '../models/Band';
import { Key } from 'protractor';

@Component({
  selector: 'app-tableBand',
  templateUrl: './tableBand.component.html',
  styleUrls: ['./tableBand.component.css']
})
export class tableBandComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }
}
