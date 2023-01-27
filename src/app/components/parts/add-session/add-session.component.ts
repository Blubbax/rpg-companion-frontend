import { CharacterService } from './../../../service/character.service';
import { Story } from './../../../model/story';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {

  public date = new FormControl(new Date());
  public formValid = false;

  @Input() story: Story | undefined;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.onChange();
  }

  onSubmit() {
    this.story?.sessions.push({
      date: this.date.value,
      steps: [],
      summary: ""
    });
    this.date.setValue(new Date());
    this.onChange();
    this.characterService.characterChanged();
  }

  onChange() {
    if (this.date.value != "") {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

}
