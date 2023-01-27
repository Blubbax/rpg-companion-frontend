import { StoryCharacter } from './../../../model/story-character';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.scss']
})
export class CharacterDialogComponent implements OnInit {

  public name: string = "";
  public description: string = "";
  public formValid = false;

  constructor(
    public dialogRef: MatDialogRef<CharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StoryCharacter
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
