import { CharacterService } from './../../../service/character.service';
import { Item } from './../../../model/item';
import { SnackbarService } from './../../../service/snackbar.service';
import { Category } from './../../../model/category';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {

  @Output() onDelete = new EventEmitter<Category>();
  @Output() onMoveUp = new EventEmitter<Category>();
  @Output() onMoveDown = new EventEmitter<Category>();
  @Input() category: Category | undefined;
  @Input() enableControls: boolean = true;

  constructor(
    private snackbarService: SnackbarService,
    private characterService: CharacterService
    ) { }

  ngOnInit(): void {
  }

  delete() {
    this.onDelete.emit(this.category);
  }

  deleteItem(item: Item) {
    this.category?.items.forEach((currentItem, index) => {
      if (currentItem === item) {
        this.category?.items.splice(index, 1);
        this.characterService.characterChanged();
        this.snackbarService.openSnackBar("Item " + item.name + " has been deleted.", "Undo", () => {
          this.category?.items.push(item);
          this.characterService.characterChanged();
        });
      };
    });
  }

  moveUp() {
    this.onMoveUp.emit(this.category);
  }

  moveDown() {
    this.onMoveDown.emit(this.category);
  }

  moveItemUp(index: number) {
    if (this.category?.items != undefined && index < this.category.items.length - 1) {
      var current = this.category.items[index];
      this.category.items[index] = this.category?.items[index + 1];
      this.category.items[index + 1] = current;
      this.characterService.characterChanged();
    }
  }

  moveItemDown(index: number) {
    if (index > 0 && this.category?.items != undefined) {
      var current = this.category.items[index];
      this.category.items[index] = this.category?.items[index - 1];
      this.category.items[index - 1] = current;
      this.characterService.characterChanged();
    }
  }


}
