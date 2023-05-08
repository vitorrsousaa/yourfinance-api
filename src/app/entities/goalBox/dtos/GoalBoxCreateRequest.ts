import { TTimeGoalBox } from '../TGoalBox';

export type GoalBoxCreateRequestDTO = {
  goalName: string;
  goalCost: number;
  goalTime: TTimeGoalBox;
  balance: number;
  user: string;
}
