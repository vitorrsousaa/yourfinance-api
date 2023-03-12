import { AnalyticsViewModelProps } from './Analytics.view-model';
import { AnalyticsViewProps } from './Analytics';
import * as styled from './Analytics.styles';
import Header from '../../components/Header';
import AreaChart from './components/AreaChart';
import Error from '../../components/Error';
import NoData from '../../components/NoData';

interface Props {
  viewModel: AnalyticsViewModelProps;
  props: AnalyticsViewProps;
}

export function AnalyticsView({ viewModel, props }: Props) {
  const { ...analyticsProps } = props;
  const { transactions, hasError, hasData, handleWithoutData } = viewModel;

  return (
    <>
      <styled.Analytics>
        <Header
          page="Analytics"
          subtitle="Tenha acesso a análise da sua vida financeira."
        />
        {hasError ? (
          <Error onError={() => console.log('tem um erro aqui')} />
        ) : hasData ? (
          <AreaChart title="Fluxo financeiro" transactions={transactions} />
        ) : (
          <NoData onDataContent={handleWithoutData} />
        )}
      </styled.Analytics>
    </>
  );
}
