import { useMemo, useState } from 'react';
import { Transaction } from '../../types/Transaction';
import { addTimeZone } from '../../utils/formatDate';

export interface OverviewViewModelProps {}

export function OverviewViewModel() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionFromPeriod, setTransactionsFromPeriod] = useState<
    Transaction[]
  >([]);

  function getSummaryByCategory(categoryParam: 'Receitas' | 'Despesas') {
    const filteredTransactions = transactionFromPeriod.filter(
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

  function getIncomeByMonths() {
    const incomeTransactions = transactions.filter(
      (transaction) => transaction.category === 'Receitas'
    );

    return incomeTransactions;
  }

  function getCardsData(category: 'Receitas' | 'Despesas') {
    const data = getSummaryByCategory(category);

    return {
      ...data,
      difference: data.currentMonth - data.lastMonth,
      percent: (data.currentMonth / data.lastMonth - 1) * 100,
    };
  }

  const incomeData = useMemo(
    () => getCardsData('Receitas'),
    [transactionFromPeriod]
  );

  const outcomeData = useMemo(
    () => getCardsData('Despesas'),
    [transactionFromPeriod]
  );

  const dataTransactions = useMemo(() => getIncomeByMonths(), [transactions]);

  return {
    isLoading,
    setIsLoading,
    hasError,
    setHasError,
    transactions,
    setTransactions,
    setTransactionsFromPeriod,
    incomeData,
    outcomeData,
    dataTransactions,
  };
}
