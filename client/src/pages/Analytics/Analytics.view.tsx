import { AnalyticsViewModelProps } from './Analytics.view-model';
import { AnalyticsViewProps } from './Analytics';
import * as styled from './Analytics.styles';
import Header from '../../components/Header';
import AreaChart from './components/AreaChart';

interface Props {
  viewModel: AnalyticsViewModelProps;
  props: AnalyticsViewProps;
}

export function AnalyticsView({ viewModel, props }: Props) {
  const { ...analyticsProps } = props;
  const { transactions } = viewModel;

  return (
    <styled.Analytics>
      <Header
        page="Analytics"
        subtitle="Tenha acesso a análise da sua vida financeira."
      />
      <AreaChart title="Fluxo financeiro" transactions={transactions} />
    </styled.Analytics>
  );
}
