import { Types } from 'mongoose';

export type TReturnGoalBox = {
  goalName: string;
  goalCost: number;
  balance: number;
  goalTime: {
    initialDate: Date;
    endDate: Date;
    endMonths: number;
  };
  payOff: number;
  _id: Types.ObjectId;
  historicTransaction: {
    date: Date;
    amount: number;
    modeTransaction: 'LESS' | 'MORE';
  }[];
}
