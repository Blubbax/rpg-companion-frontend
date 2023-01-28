import { EditModeService } from './../../service/edit-mode.service';
import { Item } from './../../model/item';
import { SnackbarService } from './../../service/snackbar.service';
import { Inventory } from './../../model/inventory';
import { CharacterService } from './../../service/character.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public inventory: Inventory | undefined;
  public favorites: Category | undefined;
  public editMode = false;

  constructor(
    private characterService: CharacterService,
    private snackbarService: SnackbarService,
    private editModeService: EditModeService
  ) { }

  ngOnInit(): void {
    this.characterService.selectedCharacter.subscribe(data => {
      this.inventory = data.inventory;
      this.determineFavorites();
    });

    this.characterService.favoritesChanged.subscribe(date => {
      this.determineFavorites();
    });

    this.editModeService.editMode.subscribe(data => {
      this.editMode = data;
    })
  }

  deleteCategory(category: Category) {
    this.inventory?.categories.forEach((currentCategory, index) => {
      if (currentCategory === category) {
        this.inventory?.categories.splice(index, 1)
        this.characterService.characterChanged();
        this.snackbarService.openSnackBar("Category " + category.name + " has been deleted.", "Undo", () => {
          this.inventory?.categories.push(category);
          this.characterService.characterChanged();
        });
      };
    });
  }

  determineFavorites() {
    var favoritesList: Item[] = [];
    this.inventory?.categories.forEach(category => {
      favoritesList = favoritesList.concat(
        category.items.filter(item => {
          return item.favorite == true;
        })
      );
    });

    if (favoritesList.length > 0) {
      this.favorites = {
        name: "Favorites",
        items: favoritesList
      };
    } else {
      this.favorites = undefined;
    }
  }

  moveCategoryUp(index: number) {
    if (this.inventory != undefined && index < this.inventory.categories.length - 1) {
      var current = this.inventory?.categories[index];
      this.inventory.categories[index] = this.inventory?.categories[index + 1];
      this.inventory.categories[index + 1] = current;
      this.characterService.characterChanged();
    }
  }

  moveCategoryDown(index: number) {
    if (index > 0 && this.inventory != undefined) {
      var current = this.inventory?.categories[index];
      this.inventory.categories[index] = this.inventory?.categories[index - 1];
      this.inventory.categories[index - 1] = current;
      this.characterService.characterChanged();
    }
  }

}
