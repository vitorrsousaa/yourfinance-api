import { TCategory } from '../../../../../entities/category/TCategory';
import { TTransaction } from '../../../../../entities/transaction/TTransaction';

export type TReturnMonths = {
  currentMonth: number;
  lastMonth: number;
  category: TCategory;
};

export type TGetCardsData = {
  difference: number;
  percent: number;
  currentMonth: number;
  lastMonth: number;
};

export type TransactionFromPeriod = TTransaction & {
  Category: TCategory;
};
