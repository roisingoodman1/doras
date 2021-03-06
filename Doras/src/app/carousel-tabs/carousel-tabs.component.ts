import { Component, OnInit, OnDestroy } from '@angular/core';
import { Capability } from '../models/capability';
import { SwitchBoardService } from '../switch-board.service';
import { Subscription } from 'rxjs';
import { DataTransferService } from '../data-transfer.service';
import { MatTabChangeEvent } from '@angular/material';
import { RolesComponent} from '../roles/roles.component'
import { DataService } from '../data.service';
import { Band } from '../models/Band';

@Component({
  selector: 'doras-carousel-tabs',
  templateUrl: './carousel-tabs.component.html',
  styleUrls: ['./carousel-tabs.component.css'],
  providers: [RolesComponent]
})
export class CarouselTabsComponent implements OnInit, OnDestroy {
  public capabilities: Capability[];
  public roles: any[];
  public bands: Band[];
  public jobBandArray: any[];
  public otherBandArray: any[];
  private step:number = 3
  constructor(private switchBoard: SwitchBoardService, private dataTransferService : DataTransferService, private rolesComponent: RolesComponent, private data: DataService) {
  }

  subCapabilities: Subscription;
  ngOnInit(): void {
    this.getCapabilities();
    this.getBand();
    this.getJobRoleBandId();
    this.getJobRoleCapId();
 }

 getCapabilities() {
  this.subCapabilities = this.switchBoard.capability$.subscribe((c) => {
    this.capabilities = c;
  });
 }
 getJobRoleCapId() {
  this.data.getJobRole().subscribe((c) => {
    this.roles = c;
    this.roles.sort((prev, next) => (prev.capId > next.capId) ? 1 : (prev.capId === next.capId) ? ((prev.bandId < next.bandId) ? 1 : -1) : -1 );
    this.roles = this.split("capId", this.roles);
  })
 }

 split(id, initialArray) {
   let length: number = initialArray.length;
   let sameValue: boolean = true;
   let previousSplitValue: number = 0;
   let tempArray = [];
  for (let i = 0; i < length; i++) {
    if (!sameValue){
      tempArray.push(initialArray.slice(previousSplitValue, i));
      previousSplitValue = i;
    } if (i+1 < length) {
      sameValue = initialArray[i][id] === initialArray[i+1][id];
    }
  }
  return tempArray
 }

 getBand() {
  this.data.getBand().subscribe(c => {
    this.bands = c.reverse();
    this.jobBandArray = this.splitIntoSubArrays(this.bands, this.step)
  });
 }
 getJobRoleBandId() {
  this.data.getJobRole().subscribe((c) => {
    this.otherBandArray = c
    this.otherBandArray.sort((a, b) => (a.bandId > b.bandId) ? 1 : -1)
    this.otherBandArray = this.split("bandId", this.otherBandArray)
  })
 }

  ngOnDestroy(): void {
    this.subCapabilities.unsubscribe();
 }

  onTabChange(event: MatTabChangeEvent) {
    if (this.roles[event.index].length !== 3) {
      for (let i = 0; i < this.bands.length; i++){
          if(this.roles[event.index][i]) {
          if (this.bands[i].bandId != this.roles[event.index][i].bandId) {
            this.roles[event.index].splice(i, 0, {
              bandId: this.jobBandArray.length-i,
              title: "No Role"
            })
          }
        } else {
          console.log(this.bands[i].bandId)
          this.roles[event.index].push({
            bandId: this.jobBandArray.length-i,
            title: "No Role"
          })
        }

      }
      (this.roles[event.index].sort((prev, next) => (prev.bandId > next.bandId) ? 1 : -1)).reverse();
      this.otherBandArray = this.splitIntoSubArrays(this.otherBandArray.reverse(), this.step)
      this.roles[event.index] = this.splitIntoSubArrays(this.roles[event.index], this.step)

    }
    this.switchBoard.getJob(this.roles[event.index]);
    this.switchBoard.getBand(this.jobBandArray);
    this.switchBoard.getOtherBand(this.otherBandArray);

 }

 splitIntoSubArrays(array: any[], step): any[] {
  const tempArray: any[] = [];
  let nextSplitValue: number;
  const length: number = array.length;

  for (let i = 0; i < length; i += step) {
    nextSplitValue = i + step;
    tempArray.push(array.slice(i, nextSplitValue));
  }
  return tempArray
 }

}
