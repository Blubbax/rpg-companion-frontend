import { ActiveSessionService } from './../../service/active-session.service';
import { Session } from './../../model/session';
import { Story } from './../../model/story';
import { CharacterService } from './../../service/character.service';
import { SnackbarService } from './../../service/snackbar.service';
import { EditModeService } from './../../service/edit-mode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  public story: Story | undefined;
  public editMode = false;

  constructor(
    private characterService: CharacterService,
    private snackbarService: SnackbarService,
    private editModeService: EditModeService,
    private activeSessionService: ActiveSessionService
  ) {
    this.characterService.selectedCharacter.subscribe(data => {
      this.story = data.story;
    });

    this.editModeService.editMode.subscribe(data => {
      this.editMode = data;
    })
  }

  ngOnInit(): void {
  }

  setCurrentSession(session: Session) {
    this.activeSessionService.setActiveSession(session);
  }

}
