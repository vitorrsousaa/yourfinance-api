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
        // const [dataTransaction, dataTransactionsPeriod] =
        //   await Promise.allSettled([
        //     TransactionsService.list(),
        //     TransactionsService.listByPeriod(2),
        //   ]);

        // console.log(dataTransaction);
        // console.log(dataTransactionsPeriod);

        const response = await TransactionsService.list();

        console.log(response);

        // setTransactions(dataTransactions.transactions);
        // setTransactions(transactionsMock);

        // const response = await api.get('/transactions?period=2');

        // console.log(response.data);
      } catch (error) {
        setHasError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadTransactions();
  }, []);

  return <OverviewView />;
}
