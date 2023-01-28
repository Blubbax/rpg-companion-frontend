import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionStepComponent } from './add-session-step.component';

describe('AddSessionStepComponent', () => {
  let component: AddSessionStepComponent;
  let fixture: ComponentFixture<AddSessionStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSessionStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSessionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
