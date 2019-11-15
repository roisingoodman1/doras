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
  constructor(private switchBoard: SwitchBoardService, private dataTransferService : DataTransferService, private rolesComponent: RolesComponent, private data: DataService) {
  }

  subCapabilities: Subscription;
  ngOnInit(): void {
    this.subCapabilities = this.switchBoard.capability$.subscribe((c) => {
      this.capabilities = c;
    });
    this.data.getJobRole().subscribe((c) => {
      this.roles = c
      this.roles.sort((a, b) => (a.capId > b.capId) ? 1 : (a.capId === b.capId) ? ((a.bandId < b.bandId) ? 1 : -1) : -1 )
      const tempArray: any[] = []
      let previousSplitValue: number = 0
      const length: number = this.roles.length
      let sameCapId: boolean = true

      for (let i = 0; i < length; i++) {
        if (!sameCapId){
          tempArray.push(this.roles.slice(previousSplitValue, i))
          previousSplitValue = i
        } try {
          if (this.roles[i].capId === this.roles[i+1].capId) {
            sameCapId = true
          } else {
            sameCapId = false
          }
        } catch { }
      }
      this.roles = tempArray
    })

    this.data.getBand().subscribe(c => {
      this.bands = c.reverse();
      this.jobBandArray = this.splitInto3(this.bands)
    });

    this.data.getJobRole().subscribe((c) => {
      this.otherBandArray = c
      this.otherBandArray.sort((a, b) => (a.bandId > b.bandId) ? 1 : -1)
      const tempArray: any[] = []
      let previousSplitValue: number = 0
      const length: number = this.otherBandArray.length
      let sameBandId: boolean = true

      for (let i = 0; i < length; i++) {
        if (!sameBandId){
          tempArray.push(this.otherBandArray.slice(previousSplitValue, i))
          previousSplitValue = i
        } try {
          if (this.otherBandArray[i].bandId === this.otherBandArray[i+1].bandId) {
            sameBandId = true
          } else {
            sameBandId = false
          }
        } catch { tempArray.push(this.otherBandArray.slice(previousSplitValue, length))
        }
      }
      this.otherBandArray = tempArray
    })
 }

  ngOnDestroy(): void {
    this.subCapabilities.unsubscribe();
 }

  onTabChange(event: MatTabChangeEvent) {
    if (this.roles[event.index].length !== 3) {
      for (let i = 0; i < this.bands.length; i++){
        try {
          if (this.bands[i].bandId != this.roles[event.index][i].bandId) {
            this.roles[event.index].splice(i, 0, {
              bandId: 9-i,
              title: "No Role"
            })
          }
        } catch {
          this.roles[event.index].push({
            bandId: 9-i,
            title: "No Role"
          })
        }
      }
      (this.roles[event.index].sort((a, b) => (a.bandId > b.bandId) ? 1 : -1)).reverse();
      this.otherBandArray = this.splitInto3(this.otherBandArray.reverse())
      this.roles[event.index] = this.splitInto3(this.roles[event.index])
      
    }
    this.switchBoard.getJob(this.roles[event.index])
    this.switchBoard.getBand(this.jobBandArray)
    this.switchBoard.getOtherBand(this.otherBandArray)
 }

 splitInto3(array: any[]): any[] {
  const tempArray: any[] = [];
  const step = 3;
  let nextSplitValue: number;
  const length: number = array.length;

  for (let i = 0; i < length; i += step) {
    nextSplitValue = i + 3;
    tempArray.push(array.slice(i, nextSplitValue));
  }
  return tempArray
 }

}
