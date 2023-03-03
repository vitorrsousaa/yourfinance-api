import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { useTheme } from 'styled-components';

import formatAmount from '../../../../utils/formatAmount';
import { formatShortDate } from '../../../../utils/formatDate';

export interface IncomeByMonth {
  date: string;
  income: number;
}

export interface BarChartViewProps {
  data: IncomeByMonth[];
}

export function BarChartView({ data }: BarChartViewProps) {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        width={350}
        height={240}
        style={{ background: theme.colors.black[900] }}
      >
        <YAxis
          tickFormatter={(value: string) => formatAmount(parseFloat(value))}
          fontSize="10px"
        />
        <XAxis
          dataKey="date"
          tickFormatter={(value) => formatShortDate(value)}
          fontSize="11px"
        />
        <Tooltip
          formatter={(value: string) => [
            formatAmount(parseFloat(value)),
            'Receita',
          ]}
          labelFormatter={(label) => formatShortDate(label)}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="income" fill={theme.colors.green[300]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
