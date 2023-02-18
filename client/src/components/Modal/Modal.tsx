import ReactDOM from 'react-dom';

import { ModalView, ModalViewProps } from './Modal.view';

interface ModalProps extends ModalViewProps {
  isOpen: boolean;
  containerId?: string;
}

export function Modal({
  isOpen,
  containerId = 'modal-root',
  ...props
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(<ModalView {...props} />, container);
}
