import { CharacterService } from './../../../service/character.service';
import { CharacterDialogComponent } from './../character-dialog/character-dialog.component';
import { StoryCharacter } from './../../../model/story-character';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: StoryCharacter | undefined;
  @Output() onDelete = new EventEmitter<StoryCharacter>();

  constructor(
    private dialog: MatDialog,
    private characterService: CharacterService) {
      console.log("Character from Input")
      console.log(this.character)
    }

  ngOnInit(): void {
  }

  editCharacter() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.character;
    const dialog = this.dialog.open(CharacterDialogComponent, dialogConfig);

    dialog.afterClosed().subscribe(result => {
      if (result == "delete") {
        this.onDelete.emit(this.character);
      } else if (result != undefined) {
        this.character = result;
        this.characterService.characterChanged();
      }
    });
  }

}
