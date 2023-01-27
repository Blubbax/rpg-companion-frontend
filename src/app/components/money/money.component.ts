import { SnackbarService } from './../../service/snackbar.service';
import { Money } from './../../model/money';
import { CharacterService } from './../../service/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {

  public money: Money = { gold: 0, silver: 0, copper: 0 };

  public type: string = "gold";
  public amount: number = 0;
  public formValid = false;

  constructor(
    private characterService: CharacterService,
    private snackbarService: SnackbarService
    ) {
    this.characterService.selectedCharacter.subscribe(data => {
      this.money = data.inventory.money;
    });

  }

  ngOnInit(): void {
  }

  onChange() {
    if (this.amount != undefined && this.type != undefined) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

  onSubmit() {

    if (this.amount > 0) {
      this.payIn(this.amount);
    } else {
      this.withdraw(-this.amount);
    }

    this.characterService.characterChanged();

    // reset form
    this.amount = 0;
  }

  payIn(amount: number) {
    switch (this.type) {
      case "gold":
        this.money.gold += amount;
        break;
      case "silver":
        this.money.silver += amount;
        break;
      case "copper":
        this.money.copper += amount;
        break;
      default:
        break;
    }
  }

  withdraw(amount: number) {
    switch (this.type) {
      case "gold":
        this.withdrawGold(amount);
        break;
      case "silver":
        this.withdrawSilver(amount);
        break;
      case "copper":
        this.withdrawCopper(amount);
        break;
      default:
        break;
    }

  }

  withdrawGold(amount: number) {
    if (this.money.gold >= amount) {
      this.money.gold -= amount;
    } else {
      this.withdrawSilver(amount * 10);
    }
  }

  withdrawSilver(amount: number) {
    if (this.money.silver >= amount) {
      this.money.silver -= amount;
    } else {
      if (!this.goldToSilverAndWithdraw(amount)) {
        this.withdrawCopper(amount * 10);
      }
    }
  }

  withdrawCopper(amount: number) {
    if (this.money.copper >= amount) {
      this.money.copper -= amount;
    } else {
      if (!this.silverToCopperAndWithdraw(amount)) {
        this.snackbarService.openSnackBar("Not enough money!", "")
      }
    }
  }

  goldToSilverAndWithdraw(targetSilver: number): boolean {
    const necessaryGold = Math.ceil(targetSilver / 10);
    if (this.money.gold >= necessaryGold) {
      this.money.gold -= necessaryGold;
      this.money.silver += necessaryGold * 10;
      this.money.silver -= targetSilver;
      return true;
    }
    return false;
  }

  silverToCopperAndWithdraw(targetCopper: number): boolean {
    const necessarySilver = Math.ceil(targetCopper / 10);
    if (this.money.silver >= necessarySilver) {
      this.money.silver -= necessarySilver;
      this.money.copper += necessarySilver * 10;
      this.money.copper -= targetCopper;
      return true;
    }
    return false;
  }


}
