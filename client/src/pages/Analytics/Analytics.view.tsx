import { AnalyticsViewModelProps } from './Analytics.view-model';
import { AnalyticsViewProps } from './Analytics';
import * as styled from './Analytics.styles';
import Header from '../../components/Header';

interface Props {
  viewModel: AnalyticsViewModelProps;
  props: AnalyticsViewProps;
}

export function AnalyticsView({ viewModel, props }: Props) {
  const { ...analyticsProps } = props;

  return (
    <styled.Analytics>
      <Header
        page="Analytics"
        subtitle="Tenha acesso a análise da sua vida financeira."
      />
    </styled.Analytics>
  );
}
