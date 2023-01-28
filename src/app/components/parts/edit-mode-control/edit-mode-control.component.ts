import { EditModeService } from './../../../service/edit-mode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-mode-control',
  templateUrl: './edit-mode-control.component.html',
  styleUrls: ['./edit-mode-control.component.scss']
})
export class EditModeControlComponent implements OnInit {

  public checked = false;

  constructor(private editModeService: EditModeService) { }

  ngOnInit(): void {
    this.editModeService.editMode.subscribe(data => {
      this.checked = data;
    });
  }

  onChange() {
    console.log(this.checked)
    this.editModeService.setEditMode(this.checked);
  }

}
