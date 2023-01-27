import { StoryCharacter } from './../../../model/story-character';
import { CharacterService } from './../../../service/character.service';
import { Story } from './../../../model/story';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {

  public name: string = "";
  public formValid = false;

  @Input() characterList: StoryCharacter[] | undefined;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.characterList?.push({
      name: this.name,
      description: ""
    });
    this.name = "";
    this.onChange();
    this.characterService.characterChanged();
  }

  onChange() {
    if (this.name != "") {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

}
