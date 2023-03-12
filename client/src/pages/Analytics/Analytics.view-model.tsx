import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { Transaction } from '../../types/Transaction';

export interface AnalyticsViewModelProps {
  hasError: boolean;
  hasData: boolean;
  transactions: Transaction[];
  handleWithoutData: () => void;
}

export function AnalyticsViewModel() {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const navigate = useNavigate();

  function handleWithoutData() {
    navigate('/transactions');
  }

  const hasData = useMemo(
    () => (transactions.length > 0 ? true : false),
    [transactions]
  );

  return {
    hasError,
    hasData,
    setHasError,
    isLoading,
    setIsLoading,
    transactions,
    setTransactions,
    handleWithoutData,
  };
}
