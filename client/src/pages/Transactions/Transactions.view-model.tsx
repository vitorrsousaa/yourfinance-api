import { useCallback, useState } from 'react';
import TransactionsService from '../../services/TransactionsService';
import { Transaction } from '../../types/Transaction';

export function TransactionsViewModel() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [selectedTransactionToDelete, setSelectedTransactionToDelete] =
    useState('');

  function handleDeleteTransactionConfirmation(id: string) {
    console.log(id, 'id');
    console.log(selectedTransactionToDelete, 'selected');
    setSelectedTransactionToDelete(id);
    setIsModalDeleteOpen(true);
  }
  console.log(selectedTransactionToDelete, 'selected2');

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

  const handleDeleteTransaction = useCallback(() => {
    console.log(selectedTransactionToDelete, 'transactions.tsx');
  }, [selectedTransactionToDelete]);

  return {
    isLoading,
    hasError,
    transactions,
    isModalCreateOpen,
    setIsModalCreateOpen,
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    selectedTransactionToDelete,
    handleDeleteTransactionConfirmation,
    handleDeleteTransaction,
    loadTransactions,
  };
}
