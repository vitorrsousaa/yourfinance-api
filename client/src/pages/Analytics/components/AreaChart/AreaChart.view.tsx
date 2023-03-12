import { AreaChartViewModelProps } from './AreaChart.view-model';
import { AreaChartViewProps } from './AreaChart';
import * as styled from './AreaChart.styles';
import {
  Area,
  AreaChart as AreaChartRecharts,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { formatShortDate } from '../../../../utils/formatDate';
import formatAmount from '../../../../utils/formatAmount';
import Option from '../../../../components/Option';
import { useTheme } from 'styled-components';

interface Props {
  viewModel: AreaChartViewModelProps;
  props: AreaChartViewProps;
}

export function AreaChartView({ viewModel, props }: Props) {
  const { title, ...areaChartProps } = props;
  const { amountByMonth, selectedMonth, handleChangeMonth } = viewModel;
  const { colors } = useTheme();

  return (
    <styled.AreaChart>
      <header className="header-area-chart">
        <strong>{title}</strong>
        <Option value={selectedMonth} onChange={handleChangeMonth} />
      </header>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChartRecharts data={amountByMonth}>
          <defs>
            <linearGradient id="outcome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.red[600]} stopOpacity={0.6} />
              <stop offset="95%" stopColor={colors.red[300]} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={colors.green[400]}
                stopOpacity={0.6}
              />
              <stop
                offset="95%"
                stopColor={colors.green[300]}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="date"
            fontSize="12px"
            tickFormatter={(value) => formatShortDate(value)}
          />
          <YAxis
            tickFormatter={(value) => formatAmount(value)}
            fontSize="10px"
          />
          <CartesianGrid horizontal={true} vertical={false} stroke="#EBEEF2" />

          <Area
            type="monotone"
            dataKey="receita"
            stroke={colors.green[500]}
            fillOpacity={1}
            fill="url(#income)"
          />
          <Area
            type="monotone"
            dataKey="despesa"
            stroke={colors.red[700]}
            fillOpacity={1}
            fill="url(#outcome)"
          />
          <Tooltip
            formatter={(value) => formatAmount(value as number)}
            labelFormatter={(label) => formatShortDate(label)}
          />
        </AreaChartRecharts>
      </ResponsiveContainer>
    </styled.AreaChart>
  );
}
