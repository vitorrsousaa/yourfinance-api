import { useCallback, useEffect, useState } from 'react';
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
    <TransactionsView
      isLoading={isLoading}
      hasError={hasError}
      handleError={loadTransactions}
      transactions={transactions}
    />
  );
}
