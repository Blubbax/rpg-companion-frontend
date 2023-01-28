import { ActiveSessionService } from './../../../service/active-session.service';
import { CharacterService } from './../../../service/character.service';
import { Session } from './../../../model/session';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-session',
  templateUrl: './current-session.component.html',
  styleUrls: ['./current-session.component.scss']
})
export class CurrentSessionComponent implements OnInit {

  public session: Session | undefined;

  public unsavedChanges = false;

  constructor(
    private characterService: CharacterService,
    private activeSessionSevice: ActiveSessionService
  ) {
    this.activeSessionSevice.activeSession.subscribe(data => {
      if (data != undefined) {
        this.session = data;
      }
    });
  }

  ngOnInit(): void {
  }

  onChange() {
    this.unsavedChanges = true;
  }

  saveChanges() {
    this.unsavedChanges = false;
    this.characterService.characterChanged();
  }
}
