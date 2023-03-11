import { ReactElement } from 'react';

import { BaseModal, Overlay } from './Modal.styles';

export interface ModalViewProps {
  title: string;
  header?: boolean;
  onClose: () => void;
  children: ReactElement;
  subtitle?: string;
}

export function ModalView(props: ModalViewProps) {
  const { title, onClose, header = true, children, subtitle } = props;
  return (
    <Overlay>
      <BaseModal>
        {header && (
          <header>
            <div>
              <h1>{title}</h1>
              {subtitle && <small>{subtitle}</small>}
            </div>
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
