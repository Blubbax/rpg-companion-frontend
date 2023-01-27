import { StoryCity } from './../../../model/story-city';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-dialog',
  templateUrl: './city-dialog.component.html',
  styleUrls: ['./city-dialog.component.scss']
})
export class CityDialogComponent implements OnInit {

  public formValid = false;

  constructor(
    public dialogRef: MatDialogRef<CityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StoryCity
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

  onDelete() {
    this.dialogRef.close("delete");
  }

}
