import Button from '../Button';
import errorImage from '../../assets/icons/images/error.svg';
import { StyledError } from './Error.styles';

export interface ErrorViewProps {
  onClick: () => void;
}

export function ErrorView({ onClick }: ErrorViewProps) {
  return (
    <StyledError>
      <img src={errorImage} alt="error" />
      <small>
        Tivemos um pequeno problema para encontrar suas informações, clique no
        botão abaixo para ser redirecionado.
      </small>
      <Button variant="secondary" onClick={onClick}>
        Tentar novamente
      </Button>
    </StyledError>
  );
}
