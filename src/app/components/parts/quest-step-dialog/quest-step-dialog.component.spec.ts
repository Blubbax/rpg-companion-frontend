import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestStepDialogComponent } from './quest-step-dialog.component';

describe('QuestStepDialogComponent', () => {
  let component: QuestStepDialogComponent;
  let fixture: ComponentFixture<QuestStepDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestStepDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestStepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
