import { Quest } from './../../../model/quest';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {

  @Input() quest: Quest|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
