import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Training } from '../models/training';

@Component({
  selector: 'app-training-popup',
  templateUrl: './training-popup.component.html',
  styleUrls: ['./training-popup.component.css']
})
export class TrainingPopupComponent {

  constructor(public dialogRef: MatDialogRef<TrainingPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Training) {
  }

  onExit(): void {
    this.dialogRef.close();
  }

}
