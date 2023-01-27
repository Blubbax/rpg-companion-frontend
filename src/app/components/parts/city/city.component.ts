import { CityDialogComponent } from './../city-dialog/city-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CharacterService } from './../../../service/character.service';
import { StoryCity } from './../../../model/story-city';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() city: StoryCity | undefined;
  @Output() onDelete = new EventEmitter<StoryCity>();

  constructor(
    private dialog: MatDialog,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
  }

  editCity() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.city;
    const dialog = this.dialog.open(CityDialogComponent, dialogConfig);

    dialog.afterClosed().subscribe(result => {
      if (result == "delete") {
        this.onDelete.emit(this.city);
      } else if (result != undefined) {
        this.city = result;
        this.characterService.characterChanged();
      }
    });
  }

}
