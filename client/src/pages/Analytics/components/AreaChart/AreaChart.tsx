import { memo } from 'react';
import { Transaction } from '../../../../types/Transaction';

import { AreaChartView } from './AreaChart.view';
import { AreaChartViewModel } from './AreaChart.view-model';

export interface AreaChartProps {
  title: string;
  transactions: Transaction[];
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface AreaChartViewProps
  extends Omit<AreaChartProps, 'transactions'> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function AreaChart(props: AreaChartProps) {
  const { transactions, ...viewProps } = props;

  const viewModel = useViewModel(transactions);

  return <AreaChartView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel(transactions: Transaction[]) {
  const viewModel = AreaChartViewModel(transactions);

  return viewModel;
}

export default memo(AreaChart);
