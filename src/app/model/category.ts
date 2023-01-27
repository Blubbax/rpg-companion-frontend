import { Item } from './item';

export interface Category {

  name: string;
  description?: string;
  items: Item[];

}
