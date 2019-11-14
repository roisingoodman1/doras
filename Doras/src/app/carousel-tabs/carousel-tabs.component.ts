import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../data.service';
import { Capability } from '../models/capability';
import { SwitchBoardService } from '../switch-board.service';
import { Subscription } from 'rxjs';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { DataTransferService } from '../data-transfer.service';
import { MatTabChangeEvent } from '@angular/material';
import { RolesComponent} from '../roles/roles.component'

@Component({
  selector: 'doras-carousel-tabs',
  templateUrl: './carousel-tabs.component.html',
  styleUrls: ['./carousel-tabs.component.css'],
  providers: [RolesComponent]
})
export class CarouselTabsComponent implements OnInit, OnDestroy {
  public capabilities: Capability[];

  constructor(private switchBoard: SwitchBoardService, private dataTransferService : DataTransferService, private rolesComponent: RolesComponent) {
  }

  subCapabilities: Subscription;
  ngOnInit(): void {
    this.subCapabilities = this.switchBoard.capability$.subscribe((c) => {
      this.capabilities = c;
    });

 }

  ngOnDestroy(): void {
    this.subCapabilities.unsubscribe();
 }

  onTabChange(event: MatTabChangeEvent) {
    this.rolesComponent.refresh()
    console.log(this.capabilities[event.index])
    console.log(this.capabilities[event.index].capId)
    // this.dataTransferService.capability = this.capabilities[event.index];
    this.dataTransferService.setCapability(this.capabilities[event.index]);
 }

}
