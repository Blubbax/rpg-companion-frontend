import { Character } from './../../model/character';
import { CharacterService } from './../../service/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public character: Character|undefined;

  constructor(private characterService: CharacterService) {
    this.characterService.selectedCharacter.subscribe(data => {
      this.character = data;
    });
  }

  ngOnInit(): void {
  }

}
