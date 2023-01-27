import { CharacterService } from './../../../service/character.service';
import { Story } from './../../../model/story';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

  public name: string = "";
  public formValid = false;

  @Input() story: Story | undefined;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.story?.cities.push({
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
