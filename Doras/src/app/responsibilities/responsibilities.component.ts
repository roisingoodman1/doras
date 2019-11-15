import { Component, Inject } from '@angular/core';
import { Job } from '../models/job';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-responsibilities',
  templateUrl: './responsibilities.component.html',
  styleUrls: ['./responsibilities.component.css'],
  providers: [MatDialogModule]
})
export class ResponsibilitiesComponent {
  public responsibilities: string[]
  constructor(public dialogRef: MatDialogRef<ResponsibilitiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.responsibilities = this.data.data[0].responsibilities.split(';');
  }

  onExit(): void {

    this.dialogRef.close();
  }

}

