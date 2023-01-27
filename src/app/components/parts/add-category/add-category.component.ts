import { Inventory } from './../../../model/inventory';
import { CharacterService } from './../../../service/character.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  @Input() inventory: Inventory|undefined;

  public name: string = "";
  public formValid = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.inventory?.categories.push({
      name: this.name,
      items: []
    });
    this.characterService.characterChanged();
    this.name = "";
  }

  onChange() {
    if (this.name != "") {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

}
