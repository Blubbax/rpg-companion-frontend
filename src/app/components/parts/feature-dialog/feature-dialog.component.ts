import { Feature } from './../../../model/feature';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-feature-dialog',
  templateUrl: './feature-dialog.component.html',
  styleUrls: ['./feature-dialog.component.scss']
})
export class FeatureDialogComponent implements OnInit {

  public formValid = false;

  constructor(
    public dialogRef: MatDialogRef<FeatureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Feature
  ) { }

  ngOnInit(): void {
    this.onChange();
  }

  onChange() {
    if (this.data.name != "") {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

}
