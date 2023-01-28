import { EditModeService } from './../../service/edit-mode.service';
import { SnackbarService } from './../../service/snackbar.service';
import { Character } from './../../model/character';
import { QuestType } from './../../model/quest-type';
import { Quest } from './../../model/quest';
import { CharacterService } from './../../service/character.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent implements OnInit {

  public character: Character | undefined;
  public editMode = false;

  public mainquests: Quest[] | undefined = [];
  public sidequests: Quest[] | undefined = [];
  public completedQuests: Quest[] | undefined = [];

  public showCompletedQuests = false;

  constructor(
    private characterService: CharacterService,
    private snackbarService: SnackbarService,
    private editModeService: EditModeService
  ) {
    this.characterService.selectedCharacter.subscribe(data => {
      this.character = data;
      this.generateQuestLists();
    });

    this.editModeService.editMode.subscribe(data => {
      this.editMode = data;
    })
  }

  ngOnInit(): void {
  }

  deleteQuest(quest: Quest) {
    this.character?.quests.forEach((currentItem, index) => {
      if (currentItem === quest) {
        this.character?.quests.splice(index, 1);
        this.characterService.characterChanged();
        this.snackbarService.openSnackBar("Quest " + quest.name + " has been deleted.", "Undo", () => {
          this.character?.quests.push(quest);
          this.characterService.characterChanged();
        });
      };
    });
    this.generateQuestLists();
  }

  questEdited(quest: Quest) {
    this.generateQuestLists();
  }

  toggeCompletedVisibility() {
    this.showCompletedQuests = !this.showCompletedQuests;
  }

  private generateQuestLists() {
    this.mainquests = this.character?.quests.filter(quest => quest.type == QuestType.mainquest && quest.finished == false);
    this.sidequests = this.character?.quests.filter(quest => quest.type == QuestType.sidequest && quest.finished == false);
    this.completedQuests = this.character?.quests.filter(quest => quest.finished == true);
  }

}
