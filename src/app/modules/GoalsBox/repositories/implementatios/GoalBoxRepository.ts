import { Prisma } from '@prisma/client';

import { TGoalBox, TTimeGoalBox } from '../../../../entities/goalBox/TGoalBox';
import prisma from '../../../../prisma';
import { IGoalBoxRepository } from '../IGoalBoxRepository';

class GoalBoxRepository implements IGoalBoxRepository {
  async registerGoal(
    goalName: string,
    goalCost: number,
    goalTime: TTimeGoalBox,
    balance: number,
    user: string,
  ): Promise<TGoalBox> {
    const historic = [{
      date: new Date(),
      amount: balance,
      modeTransaction: balance <= 1 ? 'LESS' : 'MORE'
    }] as unknown as Prisma.GoalBoxCreatehistoricTransactionsInput;

    const time = {
      initialDate: new Date(goalTime.initialDate),
      endDate: new Date(goalTime.endDate)
    } as unknown as Prisma.InputJsonValue;

    return prisma.goalBox.create({
      data: {
        goalName,
        goalCost,
        goalTime: time,
        balance,
        userId: user,
        historicTransactions: balance === 0 ? [] : historic
      }
    });
  }

  async getAllGoalsBoxOfUser(userId: string): Promise<TGoalBox[] | null> {
    return prisma.goalBox.findMany({
      where: {
        userId
      }
    });
  }

  async findUniqueGoalBox(id: string): Promise<TGoalBox | null> {
    return prisma.goalBox.findUnique({
      where: {
        id
      }
    });
  }

  async updateBalanceOfGoalBox(
    id: string,
    balance: number,
    amountTransaction: number,
    modeTransaction: 'LESS' | 'MORE'
  ): Promise<TGoalBox | null> {
    const historic = [{
      date: new Date(),
      amount: amountTransaction,
      modeTransaction
    }] as unknown as Prisma.GoalBoxCreatehistoricTransactionsInput;

    return prisma.goalBox.update({
      where: {
        id
      },
      data: {
        balance,
        historicTransactions: historic
      }
    });
  }

  async deleteGoalBox(id: string): Promise<unknown> {
    return prisma.goalBox.delete({
      where: {
        id
      }
    });
  }
}

export default new GoalBoxRepository();
