import { Prisma } from '@prisma/client';

export type THistoricInformationFixed = {
  property: 'TIME' | 'AMOUNT';
  value: number;
  updatedAt: Date;
}

export type TInformationFixed = {
  id: string
  name: string
  time: number
  amount: number
  createdAt: Date
  updatedAt: Date
  historic: Prisma.JsonValue[] | THistoricInformationFixed[];
  userId: string
  categoryId: string
}
