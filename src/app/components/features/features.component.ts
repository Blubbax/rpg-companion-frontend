import { EditModeService } from './../../service/edit-mode.service';
import { SnackbarService } from './../../service/snackbar.service';
import { Feature } from './../../model/feature';
import { Character } from './../../model/character';
import { CharacterService } from './../../service/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public character: Character | undefined;
  public editMode = false;

  constructor(
    private characterService: CharacterService,
    private snackbarService: SnackbarService,
    private editModeService: EditModeService
  ) {
    this.characterService.selectedCharacter.subscribe(data => {
      this.character = data;
    });

    this.editModeService.editMode.subscribe(data => {
      this.editMode = data;
    });
  }

  ngOnInit(): void {
  }

  deleteFeature(feature: Feature) {
    this.character?.features.forEach((currentItem, index) => {
      if (currentItem === feature) {
        this.character?.features.splice(index, 1);
        this.characterService.characterChanged();
        this.snackbarService.openSnackBar("Feature " + feature.name + " has been deleted.", "Undo", () => {
          this.character?.features.push(feature);
          this.characterService.characterChanged();
        });
      };
    });
  }

  moveFeatureUp(index: number) {
    if (this.character?.features != undefined && index < this.character?.features.length - 1) {
      var current = this.character?.features[index];
      this.character.features[index] = this.character.features[index + 1];
      this.character.features[index + 1] = current;
      this.characterService.characterChanged();
    }
  }

  moveFeatureDown(index: number) {
    if (index > 0 && this.character?.features != undefined) {
      var current = this.character.features[index];
      this.character.features[index] = this.character.features[index - 1];
      this.character.features[index - 1] = current;
      this.characterService.characterChanged();
    }
  }

}
