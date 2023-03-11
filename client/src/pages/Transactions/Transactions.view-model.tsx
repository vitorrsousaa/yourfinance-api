import { useCallback, useState } from 'react';
import TransactionsService from '../../services/TransactionsService';
import { Transaction } from '../../types/Transaction';

export function TransactionsViewModel() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [selectedTransactionToDelete, setSelectedTransactionToDelete] =
    useState('');

  function handleDeleteTransactionConfirmation(id: string) {
    setSelectedTransactionToDelete(id);
    setIsModalDeleteOpen(true);
  }

  const loadTransactions = useCallback(async () => {
    setIsLoading(true);
    try {
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
    isLoadingDelete,
    setIsLoadingDelete,
    hasError,
    transactions,
    isModalCreateOpen,
    setIsModalCreateOpen,
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    selectedTransactionToDelete,
    setTransactions,
    handleDeleteTransactionConfirmation,
    loadTransactions,
  };
}
