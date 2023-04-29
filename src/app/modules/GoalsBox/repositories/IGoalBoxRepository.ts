import { TGoalBox, TTimeGoalBox } from '../../../entities/goalBox/TGoalBox';

export interface IGoalBoxRepository {
  registerGoal(
    goalName: string,
    goalCost: number,
    goalTime: TTimeGoalBox,
    balance: number,
    user: string,
  ): Promise<TGoalBox>;
  getAllGoalsBoxOfUser(userId: string): Promise<TGoalBox[] | null>;
  findUniqueGoalBox(id: string): Promise<TGoalBox | null>;
  updateBalanceOfGoalBox(
    id: string,
    balance: number,
    amountTransaction: number,
    modeTransaction: 'LESS' | 'MORE',
  ): Promise<TGoalBox | null>;
  deleteGoalBox(id: string): Promise<unknown>;
}
