import { Prisma } from '@prisma/client';
import { v4 as uuid } from 'uuid';

import { GoalBoxCreateRequestDTO,GoalBoxCreatUpdateRequestDTO } from '../../../../entities/goalBox/dtos';
import { TGoalBox } from '../../../../entities/goalBox/TGoalBox';
import prisma from '../../../../prisma';
import { IGoalBoxRepository } from '../IGoalBoxRepository';

class GoalBoxRepository implements IGoalBoxRepository {
  async registerGoal({
    goalName,
    goalCost,
    goalTime,
    balance,
    user,
  }: GoalBoxCreateRequestDTO): Promise<TGoalBox> {
    const historic = [{
      id: `${new Date()}-${uuid()}`,
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

  async updateBalanceOfGoalBox({
    id,
    balance,
    amountTransaction,
    modeTransaction,
  }: GoalBoxCreatUpdateRequestDTO): Promise<TGoalBox | null> {
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
        historicTransactions: {
          push: historic
        }
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
