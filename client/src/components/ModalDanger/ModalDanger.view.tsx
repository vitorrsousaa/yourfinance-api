import Button from '../Button';
import Modal from '../Modal';

import { StyledModalDanger } from './ModalDanger.styles';

export interface ModalDangerViewProps {
  isOpen: boolean;
  onClose: () => void;
  onDeletedTransaction: () => void;
  title: string;
  description: string;
  subtitle: string;
}

export function ModalDangerView(props: ModalDangerViewProps) {
  const {
    isOpen,
    subtitle,
    description,
    title,
    onClose,
    onDeletedTransaction,
  } = props;
  return (
    <Modal
      containerId="modal-danger"
      title={title}
      subtitle={subtitle}
      onClose={onClose}
      isOpen={isOpen}
    >
      <StyledModalDanger>
        <small>{description}</small>
        <div className="containerButton">
          <Button type="button" variant="empty" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="button" variant="danger" onClick={onDeletedTransaction}>
            Deletar Transação
          </Button>
        </div>
      </StyledModalDanger>
    </Modal>
  );
}
