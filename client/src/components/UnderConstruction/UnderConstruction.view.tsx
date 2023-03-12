import { UnderConstructionViewModelProps } from './UnderConstruction.view-model';
import { UnderConstructionViewProps } from './UnderConstruction';
import * as styled from './UnderConstruction.styles';

interface Props {
  viewModel: UnderConstructionViewModelProps;
  props: UnderConstructionViewProps;
}

export function UnderConstructionView({ viewModel, props }: Props) {
  const { ...underConstructionProps } = props;

  return (
    <styled.UnderConstruction>
      <h1>UnderConstruction</h1>
    </styled.UnderConstruction>
  );
}
