import { useCallback, useEffect, useMemo, useState } from 'react';

import { Transaction } from '../../types/Transaction';

import { OverviewView } from './Overview.view';
import { OverviewViewModel } from './Overview.view-model';

import TransactionsService from '../../services/TransactionsService';
import { useNavigate } from 'react-router-dom';
import Error from '../../components/Error';
import NoData from '../../components/NoData';
import Loader from '../../components/Loader';

export function Overview() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionFromPeriod, setTransactionsFromPeriod] = useState<
    Transaction[]
  >([]);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const { getSummaryByCategory, getIncomeByMonths } = OverviewViewModel(
    transactionFromPeriod,
    transactions
  );

  const loadTransactions = useCallback(async () => {
    try {
      setIsLoading(true);
      const [dataTransaction, dataTransactionsPeriod] = await Promise.all([
        TransactionsService.list(),
        TransactionsService.listByPeriod(2),
      ]);

      setTransactions(dataTransaction.transactions);
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

  function handleDataContent() {
    navigate('/transactions');
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

  return (
    <>
      <Loader isLoading={isLoading} variant="large" />
      {hasError ? (
        <Error onError={loadTransactions} />
      ) : transactions.length > 0 ? (
        <OverviewView
          incomeData={incomeData}
          outcomeData={outcomeData}
          transactions={dataTransactions}
        />
      ) : (
        <NoData onDataContent={handleDataContent} />
      )}
    </>
  );
}
