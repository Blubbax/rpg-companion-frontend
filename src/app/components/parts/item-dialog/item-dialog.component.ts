import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from './../../../model/item';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss']
})
export class ItemDialogComponent implements OnInit {

  public formValid = false;

  constructor(
    public dialogRef: MatDialogRef<ItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item
  ) { }

  ngOnInit(): void {
    this.onChange();
  }

  onChange() {
    if (this.data.quantity > 0) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

}
