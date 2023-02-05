import ReactDOM from 'react-dom';
import { Container, Overlay } from './styles';

interface LoadingProps {
  size?: string;
  isLoading: boolean;
}

const Loader = ({ size, isLoading }: LoadingProps) => {
  let container = document.getElementById('loader-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'loader-root');
    document.body.appendChild(container);
  }

  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container size={size}>
        <div className="loader"></div>
      </Container>
    </Overlay>,
    container
  );
};

export default Loader;
