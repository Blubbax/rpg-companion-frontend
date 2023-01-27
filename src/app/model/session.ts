import { SessionStep } from './session-step';
export interface Session {
  date: Date;
  steps: SessionStep[];
  summary: string;
}
