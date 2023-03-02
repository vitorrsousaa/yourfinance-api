import { useCallback, useEffect, useMemo, useState } from 'react';
import TransactionsService from '../../services/TransactionsService';
import { Transaction, TransactionsData } from '../../types/Transaction';
import { OverviewView } from './Overview.view';
import { overviewViewModel } from './Overview.view-model';

export function Overview() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionFromPeriod, setTransactionsFromPeriod] = useState<
    Transaction[]
  >([]);
  const [hasError, setHasError] = useState(false);

  const { getSummaryByCategory } = overviewViewModel(transactionFromPeriod);

  const loadTransactions = useCallback(async () => {
    try {
      setIsLoading(true);
      const [dataTransaction, dataTransactionsPeriod] = await Promise.all([
        TransactionsService.list(),
        TransactionsService.listByPeriod(2),
      ]);

      setTransactions(dataTransaction);
      setTransactionsFromPeriod(dataTransactionsPeriod.transactions);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTransactions();
  }, []);

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

  return (
    <OverviewView
      hasError={hasError}
      handleError={loadTransactions}
      isLoading={isLoading}
      incomeData={incomeData}
      outcomeData={outcomeData}
    />
  );
}
