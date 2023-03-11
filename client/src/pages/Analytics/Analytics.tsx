import { memo } from 'react';

import { AnalyticsView } from './Analytics.view';
import {
  AnalyticsViewModel,
  AnalyticsViewModelProps,
} from './Analytics.view-model';

import Error from '../../components/Error';

export interface AnalyticsProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface AnalyticsViewProps extends Omit<AnalyticsProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Analytics(props: AnalyticsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();
  const { hasError } = viewModel;

  return (
    <>
      {hasError ? (
        <Error onError={() => console.log('Tem um erro')} />
      ) : (
        <AnalyticsView viewModel={viewModel} props={viewProps} />
      )}
    </>
  );
}

export function useViewModel() {
  const viewModel = AnalyticsViewModel();

  return viewModel;
}

export default memo(Analytics);
