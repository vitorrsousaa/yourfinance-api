import { useCallback, useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import NoData from '../../components/NoData';
import TransactionsService from '../../services/TransactionsService';
import { TransactionsView } from './Transactions.view';

export function Transactions() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const loadTransactions = useCallback(async () => {
    try {
      setIsLoading(true);
      const [dataTransaction] = await Promise.all([TransactionsService.list()]);

      setTransactions(dataTransaction.transactions);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {hasError ? (
        <Error onError={loadTransactions} />
      ) : transactions.length > 0 ? (
        <TransactionsView transactions={transactions} />
      ) : (
        <NoData onDataContent={() => console.log('executu')} />
      )}
    </>
  );
}
