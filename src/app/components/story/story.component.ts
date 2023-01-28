import { EditModeService } from './../../service/edit-mode.service';
import { Session } from './../../model/session';
import { StoryCity } from './../../model/story-city';
import { SnackbarService } from './../../service/snackbar.service';
import { StoryCharacter } from './../../model/story-character';
import { Story } from './../../model/story';
import { CharacterService } from './../../service/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  public story: Story | undefined;
  public editMode = false;

  constructor(
    private characterService: CharacterService,
    private snackbarService: SnackbarService,
    private editModeService: EditModeService
  ) {
    this.characterService.selectedCharacter.subscribe(data => {
      this.story = data.story;
      console.log(this.story.players);
      this.story?.players.forEach(element => {
        console.log("Player in parent")
        console.log(element);
      });
    });

    this.editModeService.editMode.subscribe(data => {
      this.editMode = data;
    });
  }

  ngOnInit(): void {
  }


  deletePlayer(character: StoryCharacter) {
    this.story?.players.forEach((currentItem, index) => {
      if (currentItem === character) {
        this.story?.players.splice(index, 1);
        this.characterService.characterChanged();
        this.snackbarService.openSnackBar("Player " + character.name + " has been deleted.", "Undo", () => {
          this.story?.players.push(character);
          this.characterService.characterChanged();
        });
      };
    });
  }

  deleteNPC(character: StoryCharacter) {
    this.story?.npcs.forEach((currentItem, index) => {
      if (currentItem === character) {
        this.story?.npcs.splice(index, 1);
        this.characterService.characterChanged();
        this.snackbarService.openSnackBar("NPC " + character.name + " has been deleted.", "Undo", () => {
          this.story?.npcs.push(character);
          this.characterService.characterChanged();
        });
      };
    });
  }

  deleteCity(city: StoryCity) {
    this.story?.cities.forEach((currentItem, index) => {
      if (currentItem === city) {
        this.story?.cities.splice(index, 1);
        this.characterService.characterChanged();
        this.snackbarService.openSnackBar("City " + city.name + " has been deleted.", "Undo", () => {
          this.story?.cities.push(city);
          this.characterService.characterChanged();
        });
      };
    });
  }

}
