import { useState } from 'react';
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
import Option from '../../../../components/Option';

import formatAmount from '../../../../utils/formatAmount';
import { formatShortDate } from '../../../../utils/formatDate';
import { StylesBarChart } from './BarChart.styles';

export interface IncomeByMonth {
  date: string;
  income: number;
}

export interface BarChartViewProps {
  data: IncomeByMonth[];
}

export function BarChartView({ data }: BarChartViewProps) {
  const theme = useTheme();
  const [selectedMonth, setSelectedMonth] = useState(3);

  // console.log(data);

  return (
    <StylesBarChart>
      <header className="header-bar-chart">
        <h1>Receitas</h1>
        <Option
          value={selectedMonth}
          onChange={(event) => setSelectedMonth(parseInt(event.target.value))}
        />
      </header>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data.filter((byMonth) => {
            const today = new Date();

            const lastMonth = new Date(
              today.getFullYear(),
              today.getMonth() - selectedMonth + 1,
              1
            );

            const byMonthDate = new Date(byMonth.date);
            const byMonthTime = byMonthDate.getTime();
            const lastMonthTime = lastMonth.getTime();

            return byMonthTime >= lastMonthTime;
          })}
        >
          <YAxis
            tickFormatter={(value: string) => formatAmount(parseFloat(value))}
            fontSize="10px"
            tick={{ fill: theme.colors.white[100] }}
          />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => formatShortDate(value)}
            fontSize="11px"
            tick={{ fill: theme.colors.white[100] }}
          />
          <Tooltip
            formatter={(value: string) => [
              formatAmount(parseFloat(value)),
              'Receita',
            ]}
            labelFormatter={(label) => formatShortDate(label)}
          />
          <CartesianGrid
            strokeDasharray="2 10"
            color={theme.colors.white[100]}
          />
          <Bar
            dataKey="income"
            fill={theme.colors.green[300]}
            animationDuration={2000}
          />
        </BarChart>
      </ResponsiveContainer>
    </StylesBarChart>
  );
}
