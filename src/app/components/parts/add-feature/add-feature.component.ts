import { CharacterService } from './../../../service/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit {

  public formValid = false;
  public name = "";
  public description = "";

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
    // TODO
    this.characterService.characterChanged();
  }

}
