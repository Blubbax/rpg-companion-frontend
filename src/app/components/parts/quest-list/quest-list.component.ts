import { Quest } from './../../../model/quest';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss']
})
export class QuestListComponent implements OnInit {

  @Input() quests: Quest[] | undefined;
  @Output() onDelete = new EventEmitter<Quest>();
  @Output() onEdit = new EventEmitter<Quest>();

  constructor() { }

  ngOnInit(): void {
  }

  questEdited(quest: Quest) {
    this.onEdit.emit(quest);
  }

  deleteQuest(quest: Quest) {
    this.onDelete.emit(quest);
  }

}
