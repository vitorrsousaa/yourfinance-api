import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { ModalBody, Overlay } from './styles';

interface ModalProps {
  isOpen: boolean;
  containerId?: string;
  title: string;
  onClose: () => void;
  children: ReactElement;
}

const Modal = ({
  title,
  onClose,
  isOpen,
  children,
  containerId = 'modal-root',
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ModalBody>
        <header>
          <h1>{title}</h1>
          <button onClick={onClose}>
            <h1>X</h1>
          </button>
        </header>
        {children}
      </ModalBody>
    </Overlay>,
    container
  );
};

export default Modal;
