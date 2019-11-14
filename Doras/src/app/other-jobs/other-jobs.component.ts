import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-other-jobs',
  templateUrl: './other-jobs.component.html',
  styleUrls: ['./other-jobs.component.css']
})
export class OtherJobsComponent {

  constructor(public dialogRef: MatDialogRef<OtherJobsComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  onExit(): void {
    this.dialogRef.close();
  }

}
