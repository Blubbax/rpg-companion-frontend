import { Quest } from './../../../model/quest';
import { CharacterService } from './../../../service/character.service';
import { Character } from './../../../model/character';
import { Component, OnInit, Input } from '@angular/core';
import { QuestType } from 'src/app/model/quest-type';

@Component({
  selector: 'app-add-quest',
  templateUrl: './add-quest.component.html',
  styleUrls: ['./add-quest.component.scss']
})
export class AddQuestComponent implements OnInit {

  @Input() character: Character | undefined;

  public name = "";
  public description = "";
  public questType: string = "";

  public formValid = false;
  public questTypes: string[] = Object.keys(QuestType).filter(Number);

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  onChange() {
    if (this.name != "" && this.description != "" && this.questType != "") {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

  onSubmit() {
    this.character?.quests.push({
      name: this.name,
      description: this.description,
      steps: [],
      type: this.questType == "1" ? QuestType.mainquest : QuestType.sidequest,
      finished: false
    });
    this.characterService.characterChanged();
    this.name = "";
    this.description = "";
  }

  getQuestTypeName(type: string) {
    return QuestType[Number.parseInt(type)];
  }

}
