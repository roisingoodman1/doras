import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Competency } from '../models/Competency';


@Component({
  selector: 'app-band-competencies',
  templateUrl: './band-competencies.component.html',
  styleUrls: ['./band-competencies.component.css']
})
export class BandCompetenciesComponent {

  constructor(public dialogRef: MatDialogRef<BandCompetenciesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Competency) {
  }

  onExit(): void {
    this.dialogRef.close();
  }

}
