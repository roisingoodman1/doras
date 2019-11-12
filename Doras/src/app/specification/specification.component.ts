import { Component, Inject } from '@angular/core';
import { Job } from '../models/job';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css'],
  providers: [MatDialogModule]
})
export class SpecificationComponent {

  constructor(public dialogRef: MatDialogRef<SpecificationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Job) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

