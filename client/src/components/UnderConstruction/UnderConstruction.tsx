import { memo } from 'react';

import { UnderConstructionView } from './UnderConstruction.view';
import {
  UnderConstructionViewModel,
  UnderConstructionViewModelProps,
} from './UnderConstruction.view-model';

export interface UnderConstructionProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface UnderConstructionViewProps
  extends Omit<UnderConstructionProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function UnderConstruction(props: UnderConstructionProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <UnderConstructionView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = UnderConstructionViewModel();

  return viewModel;
}

export default memo(UnderConstruction);
