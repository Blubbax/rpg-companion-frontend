import { Story } from './story';
import { Quest } from './quest';
import { Feature } from './feature';
import { Inventory } from './inventory';

export interface Character {

  _id?: string;
  name: string;
  features: Feature[];
  quests: Quest[];
  inventory: Inventory;
  story: Story;

}
