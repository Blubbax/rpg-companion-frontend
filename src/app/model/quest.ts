import { QuestStep } from './quest-step';
import { QuestType } from './quest-type';

export interface Quest {
  name: string;
  description: string;
  steps: QuestStep[];
  type: QuestType;
  finished: boolean;
}
