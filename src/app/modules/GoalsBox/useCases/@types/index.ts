import { THistoriGoalBox, TTimeGoalBox } from '../../../../entities/goalBox/TGoalBox';

export type TReturnGoalBox = {
  goalName: string;
  goalCost: number;
  balance: number;
  goalTime: TTimeGoalBox & {
    endMonths: number;
  };
  payOff: number;
  id: string;
  historicTransactions: THistoriGoalBox[];
}
