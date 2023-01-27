import { StoryCity } from './story-city';
import { StoryCharacter } from './story-character';
import { Session } from './session';
export interface Story {
  name: string;
  sessions: Session[];
  players: StoryCharacter[];
  npcs: StoryCharacter[];
  cities: StoryCity[];
}
