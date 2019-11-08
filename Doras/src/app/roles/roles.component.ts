import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { Band } from '../models/Band';
import { DataTransferService } from '../data-transfer.service'
import { Capability } from '../models/capability';
import { Job } from '../models/job';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public bands: Band[];
  public endArray: any[];
  public count: number = 0;
  public jobs1: Job[];
  public jobs2: Job[];
  public jobs3: Job[];

  get capability(): Capability | null {
    return this.dataTransferService.capability;
}

  constructor(private data: DataService, private dataTransferService : DataTransferService) { }

  ngOnInit() {
    this.data.getBand().subscribe(c => {
      this.bands = c.reverse();

      let array = []
      let chunk = 3
      let next
      let length = this.bands.length
      for (let i = 0; i < length; i+=chunk) {
        next = i + 3
        array.push(this.bands.slice(i, next))
      }
      this.endArray = array
    })

  }

  onSlide(slideEvent: NgbSlideEvent){
     if (slideEvent.source === NgbSlideEventSource.ARROW_LEFT){
        if (this.count === 0) {
          this.count = 2
        } else {
          this.count--
        }
    } else if ( slideEvent.source === NgbSlideEventSource.ARROW_RIGHT) {
      if (this.count === 2) {
        this.count = 0
      } else {
        this.count++
      }
    }
    console.log(this.capability.capId, this.endArray[this.count][0].bandId)
    console.log(this.capability.capId, this.endArray[this.count][1].bandId)
    console.log(this.capability.capId, this.endArray[this.count][2].bandId)

    this.data.getJobRoleTitle(this.capability.capId, this.endArray[this.count][0].bandId).subscribe(c => {
        this.jobs1 = c
        console.log(this.jobs1)
    })
    this.data.getJobRoleTitle(this.capability.capId, this.endArray[this.count][1].bandId).subscribe(c => {
      this.jobs2 = c
      console.log(this.jobs2)
  })
    this.data.getJobRoleTitle(this.capability.capId, this.endArray[this.count][2].bandId).subscribe(c => {
      this.jobs3 = c
      console.log(this.jobs3)
  })
  }

}
