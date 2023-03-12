import { UnderConstructionViewModelProps } from './UnderConstruction.view-model';
import { UnderConstructionViewProps } from './UnderConstruction';
import underConstructionImage from '../../assets/illustrations/under-construction.svg';
import * as styled from './UnderConstruction.styles';
import Button from '../Button';

interface Props {
  viewModel: UnderConstructionViewModelProps;
  props: UnderConstructionViewProps;
}

export function UnderConstructionView({ viewModel, props }: Props) {
  const { ...underConstructionProps } = props;
  const { handleUnderConstruction } = viewModel;

  return (
    <styled.UnderConstruction>
      <img src={underConstructionImage} alt="under-construction" />
      <small>
        Esta página ainda esta em construção. Estamos trabalhando para entregar
        o mais rápido possível. Enquanto isso, aproveite nossa aplicação.
      </small>
      <Button variant="primary" onClick={handleUnderConstruction}>
        Navegar para outra página
      </Button>
    </styled.UnderConstruction>
  );
}
