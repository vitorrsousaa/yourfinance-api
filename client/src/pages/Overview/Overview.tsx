import { useCallback, useEffect } from 'react';

import { OverviewView } from './Overview.view';
import { OverviewViewModel } from './Overview.view-model';
import Error from '../../components/Error';
import NoData from '../../components/NoData';
import Loader from '../../components/Loader';

import TransactionsService from '../../services/TransactionsService';
import { useNavigate } from 'react-router-dom';

export function Overview() {
  const {
    isLoading,
    setIsLoading,
    hasError,
    setHasError,
    transactions,
    setTransactions,
    incomeData,
    outcomeData,
    dataTransactions,
    setTransactionsFromPeriod,
  } = OverviewViewModel();

  const navigate = useNavigate();

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

  function handleDataContent() {
    navigate('/transactions');
  }

  return (
    <>
      <Loader isLoading={isLoading} variant="large" />
      {hasError ? (
        <Error onError={loadTransactions} />
      ) : transactions.length > 0 ? (
        <OverviewView
          incomeData={incomeData}
          outcomeData={outcomeData}
          transactions={transactions.slice(0, 4)}
          incomeTransactions={dataTransactions}
        />
      ) : (
        <NoData onDataContent={handleDataContent} />
      )}
    </>
  );
}
