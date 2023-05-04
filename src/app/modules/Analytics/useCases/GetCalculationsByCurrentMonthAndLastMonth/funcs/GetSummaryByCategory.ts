import { TCategory } from '../../../../../entities/category/TCategory';
import { addTimeZone } from '../../../../../utils/formatDate';
import { TReturnMonths, TransactionFromPeriod } from '../types';

export default function GetSummaryByCategory(categoryParam: 'Receitas' | 'Despesas', transactionFromPeriod: TransactionFromPeriod[]): TReturnMonths {
  const filteredTransactions = transactionFromPeriod.filter(
    (transaction) => (transaction.Category as TCategory).name === categoryParam
  );
  return filteredTransactions.reduce(
    (acc, transaction) => {
      const { amount, date } = transaction;
      const today = new Date();
      const lastMonth = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        1
      );
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
      currentMonth: 0,
      lastMonth: 0,
    }
  );
}
