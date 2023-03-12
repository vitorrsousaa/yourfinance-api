import Button from '../Button';

import errorImage from '../../assets/illustrations/error.svg';
import { StyledError } from './Error.styles';

export interface ErrorViewProps {
  onError: () => void;
}

export function ErrorView({ onError }: ErrorViewProps) {
  return (
    <StyledError>
      <img src={errorImage} alt="error" />
      <small>
        Tivemos um pequeno problema para encontrar suas informações, clique no
        botão abaixo para ser redirecionado.
      </small>
      <Button variant="secondary" onClick={onError}>
        Tentar novamente
      </Button>
    </StyledError>
  );
}
