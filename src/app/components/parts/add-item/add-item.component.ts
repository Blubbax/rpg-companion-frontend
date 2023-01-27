import { CharacterService } from './../../../service/character.service';
import { Category } from './../../../model/category';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  public name: string = "";
  public quantity: number = 1;
  public formValid = false;

  @Input() category: Category|undefined;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.category?.items.push({
      name: this.name,
      quantity: this.quantity
    });
    this.name = "";
    this.quantity = 1;
    this.characterService.characterChanged();
  }

  onChange() {
    if (this.name != "" && this.quantity != undefined) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }
}
