import { TGoalBox } from '../../../entities/goalBox/TGoalBox';
import { GoalBoxCreatUpdateRequestDTO, GoalBoxCreateRequestDTO } from '../../../entities/goalBox/dtos';

export interface IGoalBoxRepository {
  registerGoal({
    goalName,
    goalCost,
    goalTime,
    balance,
    user,
  }: GoalBoxCreateRequestDTO): Promise<TGoalBox>;
  getAllGoalsBoxOfUser(userId: string): Promise<TGoalBox[] | null>;
  findUniqueGoalBox(id: string): Promise<TGoalBox | null>;
  updateBalanceOfGoalBox({
    id,
    balance,
    amountTransaction,
    modeTransaction,
  }: GoalBoxCreatUpdateRequestDTO): Promise<TGoalBox | null>;
  deleteGoalBox(id: string): Promise<unknown>;
}
