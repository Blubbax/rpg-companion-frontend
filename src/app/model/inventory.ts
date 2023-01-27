import { Money } from './money';
import { Category } from './category';

export interface Inventory {

  categories: Category[];
  money: Money;

}
