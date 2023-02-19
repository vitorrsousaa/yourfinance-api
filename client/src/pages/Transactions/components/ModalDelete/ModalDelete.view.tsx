import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';

import { BaseModalDelete } from './ModalDelete.styles';

export interface ModalDeleteViewProps {
  isOpen: boolean;
  onClose: () => void;
  onDeletedTransaction: () => void;
}

export function ModalDeleteView({
  isOpen,
  onClose,
  onDeletedTransaction,
}: ModalDeleteViewProps) {
  return (
    <Modal
      containerId="modal-delete"
      title="Você tem certeza que deseja excluir a transação?"
      onClose={onClose}
      isOpen={isOpen}
    >
      <BaseModalDelete>
        <small>Essa ação não pode ser desfeita!</small>
        <div className="containerButton">
          <Button type="button" variant="empty" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="button" variant="delete" onClick={onDeletedTransaction}>
            Deletar Transação
          </Button>
        </div>
      </BaseModalDelete>
    </Modal>
  );
}
