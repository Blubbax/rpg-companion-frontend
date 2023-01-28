import { QuestStep } from './../../../model/quest-step';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-quest-step-dialog',
  templateUrl: './quest-step-dialog.component.html',
  styleUrls: ['./quest-step-dialog.component.scss']
})
export class QuestStepDialogComponent implements OnInit {

  public formValid = false;
  public mode = "Edit";

  constructor(
    public dialogRef: MatDialogRef<QuestStepDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuestStep
  ) { }

  ngOnInit(): void {
    if (this.data.name == "") {
      this.mode = "Create "
    }
    this.onChange();
  }

  onChange() {
    if (this.data?.name != "") {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

  onDelete() {
    this.dialogRef.close("delete");
  }

}
