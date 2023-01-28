import { Character } from './../../../model/character';
import { CharacterService } from './../../../service/character.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit {

  @Input() character: Character | undefined;

  public name = "";
  public description = "";
  public formValid = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  onChange() {
    if (this.name != "" && this.description != "") {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

  onSubmit() {
    this.character?.features.push({
      name: this.name,
      description: this.description
    });
    this.characterService.characterChanged();
    this.name = "";
    this.description = "";
  }

}
