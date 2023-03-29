import { TGoalBox } from '../model';

export interface IGoalBoxRepository {
  registerGoal(
    goalName: string,
    goalCost: number,
    goalTime: {
      initialDate: Date,
      endDate: Date,
    },
    balance: number,
    user: string,
  ): Promise<TGoalBox>;
  getAllGoalsBoxOfUser(userId: string): Promise<TGoalBox[] | null>;
  findUniqueGoalBox(goalBoxId: string): Promise<TGoalBox | null>;
  updateBalanceOfGoalBox(
    goalBoxId: string,
    balance: number,
    amountTransaction: number,
    modeTransaction: 'LESS' | 'MORE',
  ): Promise<TGoalBox | null>;
  deleteGoalBox(goalBoxId: string): Promise<void | null>;
}
