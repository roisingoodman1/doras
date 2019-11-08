import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-training-popup',
  templateUrl: './training-popup.component.html',
  styleUrls: ['./training-popup.component.css']
})
export class TrainingPopupComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  ngOnInit() {
  }

}
