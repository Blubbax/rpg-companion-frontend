import { EditModeService } from './../../../service/edit-mode.service';
import { FeatureDialogComponent } from './../feature-dialog/feature-dialog.component';
import { CharacterService } from './../../../service/character.service';
import { Feature } from './../../../model/feature';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() feature: Feature|undefined;
  @Output() onDelete = new EventEmitter<string>();
  @Output() onMoveUp = new EventEmitter<string>();
  @Output() onMoveDown = new EventEmitter<string>();

  public editMode = false;

  constructor(
    private dialog: MatDialog,
    private characterService: CharacterService,
    private editModeService: EditModeService
  ) {
    this.editModeService.editMode.subscribe(data => {
      this.editMode = data;
    });
  }

  ngOnInit(): void {
  }

  delete() {
    this.onDelete.emit("");
  }

  edit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.feature;
    const dialog = this.dialog.open(FeatureDialogComponent, dialogConfig);

    dialog.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.feature = result;
        this.characterService.characterChanged();
      }
    });
  }

  moveUp() {
    this.onMoveUp.emit("");
  }

  moveDown() {
    this.onMoveDown.emit("");
  }

}
