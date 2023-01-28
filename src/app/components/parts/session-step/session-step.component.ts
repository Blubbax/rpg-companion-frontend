import { SessionStep } from './../../../model/session-step';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-step',
  templateUrl: './session-step.component.html',
  styleUrls: ['./session-step.component.scss']
})
export class SessionStepComponent implements OnInit {

  @Input() step: SessionStep | undefined;
  @Input() index: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
