import { CharacterService } from './../../../service/character.service';
import { Session } from './../../../model/session';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-session-step',
  templateUrl: './add-session-step.component.html',
  styleUrls: ['./add-session-step.component.scss']
})
export class AddSessionStepComponent implements OnInit {

  @Input() session: Session | undefined;

  public name: string = "";
  public place: string = "";
  public description: string = "";

  public formValid = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
      this.session?.steps.push({
        name: this.name.trim(),
        place: this.place.trim(),
        description: this.description.trim()
      });
      this.name = "";
      this.place = "";
      this.description = "";
      this.onChange();
      this.characterService.characterChanged();
    }

    onChange() {
      if (this.name != "" && this.description != "") {
        this.formValid = true;
      } else {
        this.formValid = false;
      }
    }

}
