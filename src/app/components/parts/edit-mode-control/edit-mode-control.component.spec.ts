import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModeControlComponent } from './edit-mode-control.component';

describe('EditModeControlComponent', () => {
  let component: EditModeControlComponent;
  let fixture: ComponentFixture<EditModeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModeControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
