import { memo, useEffect } from 'react';

import { AnalyticsView } from './Analytics.view';
import { AnalyticsViewModel } from './Analytics.view-model';

import Error from '../../components/Error';
import Loader from '../../components/Loader';
import TransactionsService from '../../services/TransactionsService';
import NoData from '../../components/NoData';

export interface AnalyticsProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface AnalyticsViewProps extends Omit<AnalyticsProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Analytics(props: AnalyticsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();
  const {
    hasError,
    setHasError,
    isLoading,
    setIsLoading,
    transactions,
    setTransactions,
    handleWithoutData,
  } = viewModel;

  useEffect(() => {
    async function loadTransactions() {
      setIsLoading(true);
      try {
        const transactionsData = await TransactionsService.list();

        console.log(transactionsData);
        setTransactions(transactionsData.transactions);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} size="large" />
      {hasError ? (
        <Error onError={() => console.log('Tem um erro')} />
      ) : transactions.length > 0 ? (
        <AnalyticsView viewModel={viewModel} props={viewProps} />
      ) : (
        <NoData onDataContent={handleWithoutData} />
      )}
    </>
  );
}

export function useViewModel() {
  const viewModel = AnalyticsViewModel();

  return viewModel;
}

export default memo(Analytics);
