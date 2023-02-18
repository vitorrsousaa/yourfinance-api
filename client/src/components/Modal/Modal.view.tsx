import { ReactElement } from 'react';

import { BaseModal, Overlay } from './Modal.styles';

export interface ModalViewProps {
  title: string;
  header?: boolean;
  onClose: () => void;
  children: ReactElement;
}

export function ModalView({
  title,
  onClose,
  header,
  children,
}: ModalViewProps) {
  return (
    <Overlay>
      <BaseModal>
        {header && (
          <header>
            <h1>{title}</h1>
            <button onClick={onClose}>
              <h1>X</h1>
            </button>
          </header>
        )}
        {children}
      </BaseModal>
    </Overlay>
  );
}
