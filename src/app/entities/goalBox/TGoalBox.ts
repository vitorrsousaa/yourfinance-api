import { Prisma } from '@prisma/client';

export type THistoriGoalBox = {
  date: Date;
  amount: number;
  modeTransaction: 'LESS' | 'MORE';
}

export type TTimeGoalBox = {
  initialDate: Date;
  endDate: Date;
}

export type TGoalBox = {
  id: string
  goalName: string
  goalCost: number
  goalTime: Prisma.JsonValue | TTimeGoalBox
  balance: number
  historicTransactions: Prisma.JsonValue[] | THistoriGoalBox[];
  userId: string
}
