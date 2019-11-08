import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { CapabilityLead } from '../models/capabilityLead';

@Component({
  selector: 'app-capability-lead',
  templateUrl: './capability-lead.component.html',
  styleUrls: ['./capability-lead.component.css']
})
export class CapabilityLeadComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private http: HttpClient, private data: DataService) {
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  capabilityLeads = this.http.get<string[]>('/api/getCapabilities');

  ngOnInit() {
    
  }

}
