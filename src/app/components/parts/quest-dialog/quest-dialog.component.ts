import { QuestType } from 'src/app/model/quest-type';
import { Quest } from './../../../model/quest';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-quest-dialog',
  templateUrl: './quest-dialog.component.html',
  styleUrls: ['./quest-dialog.component.scss']
})
export class QuestDialogComponent implements OnInit {

  public questType: string = "";

  public formValid = false;
  public questTypes: string[] = Object.keys(QuestType).filter(Number);

  constructor(
    public dialogRef: MatDialogRef<QuestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Quest
  ) {
    this.questType = QuestType[this.data.type];
  }

  ngOnInit(): void {
    this.onChange();
  }

  onChange() {
    if (this.data.name != "" && this.data.description != "" && this.data.type != undefined) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
    this.data.type = this.questType == "1" ? QuestType.mainquest : QuestType.sidequest
  }

  getQuestTypeName(type: string) {
    return QuestType[Number.parseInt(type)];
  }

}
