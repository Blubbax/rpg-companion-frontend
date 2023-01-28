import { SnackbarService } from './../../../service/snackbar.service';
import { QuestStep } from './../../../model/quest-step';
import { QuestStepDialogComponent } from './../quest-step-dialog/quest-step-dialog.component';
import { EditModeService } from './../../../service/edit-mode.service';
import { CharacterService } from './../../../service/character.service';
import { QuestDialogComponent } from './../quest-dialog/quest-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Quest } from './../../../model/quest';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {

  @Input() quest: Quest | undefined;
  @Output() onDelete = new EventEmitter<Quest>();
  @Output() onEdit = new EventEmitter<Quest>();

  public editMode = false;

  constructor(
    private dialog: MatDialog,
    private characterService: CharacterService,
    private editModeService: EditModeService,
    private snackbarService: SnackbarService
  ) {
    this.editModeService.editMode.subscribe(data => {
      this.editMode = data;
    })
  }

  ngOnInit(): void {
  }

  edit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.quest;
    const dialog = this.dialog.open(QuestDialogComponent, dialogConfig);

    dialog.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.quest = result;
        this.onEdit.emit(this.quest);
        this.characterService.characterChanged();
      }
    });
  }

  delete() {
    this.onDelete.emit(this.quest);
  }

  addStep() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      name: "",
      description: "",
      result: "",
      done: false
    };
    const dialog = this.dialog.open(QuestStepDialogComponent, dialogConfig);

    dialog.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.quest?.steps.push(result);
        this.characterService.characterChanged();
      }
    });
  }

  editStep(step: QuestStep) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = step;
    const dialog = this.dialog.open(QuestStepDialogComponent, dialogConfig);

    dialog.afterClosed().subscribe(result => {
      if (result == "delete") {
        this.deleteQuestStep(step);
      } else if (result != undefined) {
        step = result;
        this.characterService.characterChanged();
      }
    });
  }

  deleteQuestStep(step: QuestStep) {
    console.log("delete");
    console.log(step)
    this.quest?.steps.forEach((currentItem, index) => {
      if (currentItem === step) {
        this.quest?.steps.splice(index, 1);
        this.characterService.characterChanged();
        this.snackbarService.openSnackBar("Task " + step.name + " has been deleted.", "Undo", () => {
          this.quest?.steps.push(step);
          this.characterService.characterChanged();
        });
      };
    });
  }

  dataChanged() {
    this.characterService.characterChanged();
  }

}
