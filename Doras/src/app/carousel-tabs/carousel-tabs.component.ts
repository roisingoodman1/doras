import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../data.service';
import { Capability } from '../models/capability';
import { SwitchBoardService } from '../switch-board.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'doras-carousel-tabs',
  templateUrl: './carousel-tabs.component.html',
  styleUrls: ['./carousel-tabs.component.css'],
})
export class CarouselTabsComponent implements OnInit, OnDestroy {
  public capabilities: Capability[];

  constructor(private switchBoard: SwitchBoardService) {
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

}
