import { SessionStep } from './../model/session-step';
import { Observable, BehaviorSubject } from 'rxjs';
import { Session } from './../model/session';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveSessionService {

  public activeSession: Observable<Session | undefined>;
  private activeSessionSubject: BehaviorSubject<any>;

  public activeStep: Observable<SessionStep | undefined>;
  private activeStepSubject: BehaviorSubject<any>;

  constructor() {
    this.activeSessionSubject = new BehaviorSubject<Session | undefined>(undefined);
    this.activeSession = this.activeSessionSubject.asObservable();

    this.activeStepSubject = new BehaviorSubject<SessionStep | undefined>(undefined);
    this.activeStep = this.activeStepSubject.asObservable();
  }


  setActiveSession(session: Session) {
    this.activeSessionSubject.next(session);
  }

  setActiveStep(step: SessionStep) {
    this.activeStepSubject.next(step);
  }

}
