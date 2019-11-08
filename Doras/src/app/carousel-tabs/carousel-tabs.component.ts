
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../data.service';
import { Capability } from '../models/capability';
import { SwitchBoardService } from '../switch-board.service';
import { Subscription } from 'rxjs';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap'
import { DataTransferService } from '../data-transfer.service'

@Component({
  selector: 'doras-carousel-tabs',
  templateUrl: './carousel-tabs.component.html',
  styleUrls: ['./carousel-tabs.component.css'],
})
export class CarouselTabsComponent implements OnInit, OnDestroy {
  public capabilities: Capability[];

  constructor(private switchBoard: SwitchBoardService, private dataTransferService : DataTransferService) {
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

  onTabChange(tabChange: NgbTabChangeEvent) {
    this.dataTransferService.capability = this.capabilities[tabChange.nextId];
 }

}
