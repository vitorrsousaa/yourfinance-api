import { AnalyticsViewModelProps } from './Analytics.view-model';
import { AnalyticsViewProps } from './Analytics';
import * as styled from './Analytics.styles';

interface Props {
  viewModel: AnalyticsViewModelProps;
  props: AnalyticsViewProps;
}

export function AnalyticsView({ viewModel, props }: Props) {
  const { ...analyticsProps } = props;

  return (
    <styled.Analytics>
      <h1>Analytics</h1>
    </styled.Analytics>
  );
}
