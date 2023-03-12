import { memo, useEffect } from 'react';

import { AnalyticsView } from './Analytics.view';
import { AnalyticsViewModel } from './Analytics.view-model';

import Loader from '../../components/Loader';
import TransactionsService from '../../services/TransactionsService';

export interface AnalyticsProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface AnalyticsViewProps extends Omit<AnalyticsProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Analytics(props: AnalyticsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();
  const { setHasError, isLoading, setIsLoading, setTransactions } = viewModel;

  useEffect(() => {
    async function loadTransactions() {
      setIsLoading(true);
      try {
        const transactionsData = await TransactionsService.list();

        setTransactions(transactionsData.transactions);
        setHasError(true);
      } catch {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} size="large" />

      <AnalyticsView viewModel={viewModel} props={viewProps} />
    </>
  );
}

export function useViewModel() {
  const viewModel = AnalyticsViewModel();

  return viewModel;
}

export default memo(Analytics);
