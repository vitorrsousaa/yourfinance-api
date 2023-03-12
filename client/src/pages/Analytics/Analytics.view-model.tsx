import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Transaction } from '../../types/Transaction';

export interface AnalyticsViewModelProps {
  hasError: boolean;
  transactions: Transaction[];
}

export function AnalyticsViewModel() {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const navigate = useNavigate();

  function handleWithoutData() {
    navigate('/transactions');
  }

  return {
    hasError,
    setHasError,
    isLoading,
    setIsLoading,
    transactions,
    setTransactions,
    handleWithoutData,
  };
}
