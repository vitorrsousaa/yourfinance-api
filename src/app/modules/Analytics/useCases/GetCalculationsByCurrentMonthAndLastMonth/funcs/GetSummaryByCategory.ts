import { TCategory } from '../../../../../entities/category/TCategory';
import { addTimeZone } from '../../../../../utils/formatDate';
import { TransactionFromPeriod, TReturnMonths } from '../types';

export default function GetSummaryByCategory(
  category: TCategory,
  transactionFromPeriod: TransactionFromPeriod[]
): TReturnMonths {
  const filteredTransactions = transactionFromPeriod.filter(
    (transaction) => (transaction.Category as TCategory).id === category.id
  );

  return filteredTransactions.reduce(
    (acc, transaction) => {
      const { amount, date } = transaction;
      const today = new Date();
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

      const dateTransaction = addTimeZone(String(date));

      if (dateTransaction >= currentMonth) {
        acc.currentMonth += amount;
      }

      if (dateTransaction < currentMonth && dateTransaction > lastMonth) {
        acc.lastMonth += amount;
      }

      return acc;
    },
    {
      category,
      currentMonth: 0,
      lastMonth: 0,
    }
  );
}
