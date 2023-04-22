import GoalBox, { TGoalBox } from '../../model';
import { IGoalBoxRepository } from '../IGoalBoxRepository';

class GoalBoxRepository implements IGoalBoxRepository {
  async registerGoal(
    goalName: string,
    goalCost: number,
    goalTime: {
      initialDate: Date,
      endDate: Date,
    },
    balance: number,
    user: string,
    historicTransaction: TGoalBox['historicTransaction'],
  ): Promise<TGoalBox> {
    return GoalBox.create({
      goalName,
      goalCost,
      goalTime,
      balance,
      user,
      historicTransaction
    });
  }

  async getAllGoalsBoxOfUser(userId: string): Promise<TGoalBox[] | null> {
    return GoalBox.find({ user: userId });
  }

  async findUniqueGoalBox(goalBoxId: string): Promise<TGoalBox | null> {
    return GoalBox.findById(goalBoxId);
  }

  async updateBalanceOfGoalBox(
    goalBoxId: string,
    balance: number,
    amountTransaction: number,
    modeTransaction: 'LESS' | 'MORE'
  ): Promise<TGoalBox | null> {
    return GoalBox.findByIdAndUpdate(goalBoxId, {
      $set: {
        balance,
      },
      $push: {
        historicTransaction: {
          date: new Date(),
          amount: amountTransaction,
          modeTransaction,
        }
      }
    }, { new: true });
  }

  async deleteGoalBox(goalBoxId: string): Promise<void | null> {
    return GoalBox.findByIdAndDelete(goalBoxId);
  }
}

export default new GoalBoxRepository();
