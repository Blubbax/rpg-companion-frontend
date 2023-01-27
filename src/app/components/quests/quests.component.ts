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

  public quests: Quest[] = [];

  constructor(private characterService: CharacterService) {
    this.characterService.selectedCharacter.subscribe(data => {
      this.quests = data.quests;
    });
  }

  ngOnInit(): void {
  }

}
