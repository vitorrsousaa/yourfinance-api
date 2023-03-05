import { useCallback, useState } from 'react';
import TransactionsService from '../../services/TransactionsService';
import { Transaction } from '../../types/Transaction';

export function TransactionsViewModel() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [transactionIdToDelete, setTransactionIdToDelete] = useState('');

  function handleDeleteTransaction(id: string) {
    setTransactionIdToDelete(id);
    setIsModalDeleteOpen(true);
  }

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

  return {
    isLoading,
    hasError,
    transactions,
    isModalCreateOpen,
    setIsModalCreateOpen,
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    transactionIdToDelete,
    handleDeleteTransaction,
    loadTransactions,
  };
}
