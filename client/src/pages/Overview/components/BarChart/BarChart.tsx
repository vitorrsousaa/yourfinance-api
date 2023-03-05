import { BarChartView, BarChartViewProps } from './BarChart.view';

import { Transaction } from '../../../../types/Transaction';

import { BarChartViewModel } from './BarChart.view-model';

interface BarChart extends Omit<BarChartViewProps, 'data'> {
  transactions: Transaction[];
}

export function BarChart({ transactions, ...props }: BarChart) {
  const { formatedData } = BarChartViewModel(transactions);

  return <BarChartView data={formatedData} {...props} />;
}
