import Button from '../Button';
import Modal from '../Modal';

import { StyledModalDanger } from './ModalDanger.styles';

export interface ModalDangerViewProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  title: string;
  description: string;
  subtitle: string;
}

export function ModalDangerView(props: ModalDangerViewProps) {
  const { isOpen, subtitle, description, title, onClose, onDelete } = props;
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
          <Button type="button" variant="danger" onClick={onDelete}>
            Deletar Transação
          </Button>
        </div>
      </StyledModalDanger>
    </Modal>
  );
}
