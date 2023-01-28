import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionStepComponent } from './session-step.component';

describe('SessionStepComponent', () => {
  let component: SessionStepComponent;
  let fixture: ComponentFixture<SessionStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
