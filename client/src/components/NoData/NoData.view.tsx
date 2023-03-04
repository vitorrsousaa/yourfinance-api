import Button from '../Button';

import noData from '../../assets/icons/images/no-data.svg';
import { StyledNoData } from './NoData.styles';

export interface NoDataViewProps {
  onDataContent: () => void;
}

export function NoDataView({ onDataContent }: NoDataViewProps) {
  return (
    <StyledNoData>
      <img src={noData} alt="no-Content" />
      <small>
        Você ainda não possui dados para realizarmos nossas análises, cadastre
        clicando no botão abaixo.
      </small>
      <Button variant="primary" onClick={onDataContent}>
        Criar nova transação
      </Button>
    </StyledNoData>
  );
}
