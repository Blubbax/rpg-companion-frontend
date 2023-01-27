import { ItemDialogComponent } from './../item-dialog/item-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CharacterService } from './../../../service/character.service';
import { Item } from './../../../model/item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Output() onDelete = new EventEmitter<Item>();
  @Output() onMoveUp = new EventEmitter<Item>();
  @Output() onMoveDown = new EventEmitter<Item>();
  @Input() item: Item | undefined;

  constructor(
    private dialog: MatDialog,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
  }

  decrease(quantity: number) {
    if (this.item) {
      if (this.item.quantity >= quantity) {
        this.item.quantity -= quantity;
        this.characterService.characterChanged();
      }
    }
  }

  increase(quantity: number) {
    if (this.item) {
      this.item.quantity = +this.item.quantity + quantity;
      this.characterService.characterChanged();
    }
  }

  delete() {
    this.onDelete.emit(this.item);
  }

  editQuantity() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.item;
    const dialog = this.dialog.open(ItemDialogComponent, dialogConfig);

    dialog.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.item = result;
        this.characterService.characterChanged();
      }
    });
  }

  toggleFavorite() {
    if (this.item != undefined) {
      if (this.item?.favorite == undefined) {
        this.item.favorite = true;
      } else {
        this.item.favorite = !this.item?.favorite;
      }
      this.characterService.changeFavorites();
      this.characterService.characterChanged();
    }
  }

  moveDown() {
    this.onMoveDown.emit(this.item);
  }

  moveUp() {
    this.onMoveUp.emit(this.item);
  }



}
