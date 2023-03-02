import { Transaction } from '../../types/Transaction';
import { addTimeZone } from '../../utils/formatDate';

export interface OverviewViewModelProps {}

export function overviewViewModel(fromPeriod: Transaction[]) {
  function getSummaryByCategory(categoryParam: 'Receitas' | 'Despesas') {
    const filteredTransactions = fromPeriod.filter(
      (transaction) => transaction.category === categoryParam
    );
    return filteredTransactions.reduce(
      (acc, transaction) => {
        const { amount, createdAt } = transaction;
        const today = new Date();
        const lastMonth = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          1
        );
        const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        const dateTransaction = addTimeZone(createdAt);

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

  return {
    getSummaryByCategory,
  };
}
