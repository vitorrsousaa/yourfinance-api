import { useEffect, useState } from 'react';
import TransactionsService from '../../services/TransactionsService';
import { Transaction, TransactionsData } from '../../types/Transaction';
import { OverviewView } from './Overview.view';

export function Overview() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionFromPeriod, setTransactionsFromPeriod] = useState<
    Transaction[]
  >([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadTransactions() {
      try {
        setIsLoading(true);
        const [dataTransaction, dataTransactionsPeriod] = await Promise.all([
          TransactionsService.list(),
          TransactionsService.listByPeriod(2),
        ]);

        // if (
        //   dataTransaction.status === 'rejected' ||
        //   dataTransactionsPeriod.status === 'rejected'
        // ) {
        //   return setHasError(true);
        // }

        setTransactions(dataTransaction.value);
        setTransactionsFromPeriod(dataTransactionsPeriod.value);
      } catch (error) {
        setHasError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadTransactions();
  }, []);

  return <OverviewView hasError={hasError} />;
}
